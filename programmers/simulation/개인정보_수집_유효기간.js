function solution(today, terms, privacies) {
    const answer = [];
    
    // 오늘 날짜 일 단위 환산
    const [tY, tM, tD] = today.split('.').map(Number);
    const todayTotal = (tY * 12 * 28) + (tM * 28) + tD;
    
    // 약관 정보 Map 정리
    const termMap = {};
    terms.forEach(t => {
        const [type, month] = t.split(' ');
        termMap[type] = Number(month) * 28;
    });
    
    // 개인정보 순회
    privacies.forEach((p, index) => {
        const [date, type] = p.split(' ');
        const [pY, pM, pD] = date.split('.').map(Number);
        
        // 수집일로부터 파기일까지의 날짜 수
        const privacyTotal = (pY * 12 * 28) + (pM * 28) + pD + termMap[type];
        
        // Edge Case 
        // privacyTotal와 todayTotal이 같은 경우 
        // => 만료일의 그 다음 날짜와 오늘 날짜가 같다.
        if (privacyTotal <= todayTotal) {
            answer.push(index + 1);
        }
    });
    
    return answer;
}