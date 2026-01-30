function solution(survey, choices) {
    // 첫번째 캐릭터 -> 비동의
    // 두번째 캐릭터 -> 동의
    
    // 1~3 : 비동의
    // 5~7 : 동의
    
    const dic = {
        'R': 0,
        'T': 0,
        'C': 0,
        'F': 0,
        'J': 0,
        'M': 0,
        'A': 0,
        'N': 0
    }
    
    let answer = ''
    
    for (let i = 0; i < survey.length; i++) {
        const [disagree, agree] = survey[i];
        const score = choices[i];
        const finalScore = Math.abs(score - 4);
        
        // 비동의 영역
        if (score < 4) {
            dic[disagree] += finalScore; 
        }
        
        // 동의 영역
        else if (score > 4) {
            dic[agree] += finalScore; 
        }
    }
    
    // 지표 1 판별
    if (dic['R'] < dic['T']) {
        answer += 'T'
    } else {
        answer += 'R'
    }
    
    // 지표 2 판별
    if (dic['C'] < dic['F']) {
        answer += 'F'
    } else {
        answer += 'C'
    }
    
    // 지표 3 판별
    if (dic['J'] < dic['M']) {
        answer += 'M'
    } else {
        answer += 'J'
    }

    // 지표 4 판별
    if (dic['A'] < dic['N']) {
        answer += 'N'
    } else {
        answer += 'A'
    }
    
    // console.log(answer);
    return answer;
}