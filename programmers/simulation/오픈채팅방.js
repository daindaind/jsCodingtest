function solution(record) {
    // 유저 아이디 : 유저 닉네임
    let userData = {};
    
    for (let userRecord of record) {
        const [action, id, nickname] = userRecord.split(' ');
        if (action !== 'Leave') userData[id] = nickname;
    }
    
    let answer = [];
    
    for (let userRecord of record) {
        const [action, id, nickname] = userRecord.split(' ');
        
        if (action === 'Enter') {
            answer.push(`${userData[id]}님이 들어왔습니다.`)
        } else if (action === 'Leave') {
            answer.push(`${userData[id]}님이 나갔습니다.`)
        }
    }
    
    return answer;
}