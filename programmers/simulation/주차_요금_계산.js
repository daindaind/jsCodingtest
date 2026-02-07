function solution(fees, records) {    
    const [defaultTime, defaultFee, chargeTime, chargeFee] = fees;
    let parking = {}; // 현재 주차된 차량
    let totalTime = {}; // 차량별 누적 이용 시간
    
    for (let record of records) {
        const [time, carNum, type] = record.split(' ');
        const minute = Number(time.split(':')[0]) * 60 + Number(time.split(':')[1]);
        
        if (type === 'IN') {
            parking[carNum] = minute;
            if (totalTime[carNum] === undefined) totalTime[carNum] = 0;
        } else {
            totalTime[carNum] += (minute - parking[carNum]);
            delete parking[carNum]
        }
    }
    
    // 출차 안 한 차량 처리
    for (let carNum in parking) {
        totalTime[carNum] += 1439 - parking[carNum];
    }
    
    const sortedCars = Object.keys(totalTime).sort();
    
    // 요금 계산
    return sortedCars.map((carNum) => {
        if (totalTime[carNum] <= defaultTime) {
            return defaultFee;
        } else {
            return defaultFee + Math.ceil((totalTime[carNum] - defaultTime) / chargeTime) * chargeFee
        }
    });
}