function solution(skill, skill_trees) {
    let answer = 0;
    
    for (let i = 0; i < skill_trees.length; i++) {
        // 1. 매 스킬트리마다 새로운 큐를 생성
        let queue = skill.split('');
        let isPossible = true;
        
        for (let j = 0; j < skill_trees[i].length; j++) {
            const nowSkill = skill_trees[i][j];
            
            // 2. 선행 스킬 목록에 포함된 스킬일 경우
            if (queue.includes(nowSkill)) {
                // 3. 먼저 배워야 할 스킬과 현재 스킬이 같은지 체크
                if (nowSkill === queue[0]) {
                    queue.shift();
                } else {
                    isPossible = false;
                    break;
                }
            }
        }
        
        if (isPossible) answer += 1;
    }
    
    return answer;
}