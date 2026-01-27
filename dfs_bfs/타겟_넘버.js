function solution(numbers, target) {
    let answer = 0;
    
    function dfs(index, sum) {
        // 종료 조건
        // 들여쓰기로 깊이(depth)를 시각화
        const indent = "  ".repeat(index);
        console.log(`${indent}입장: index=${index}, 현재합=${sum}`);

        if (index === numbers.length) {
            console.log(`${indent}ㄴ 종료! 합계가 ${sum}이네요.`);
            if (sum === target) answer += 1;
            return;
        }
        
        dfs(index + 1, sum + numbers[index])
        dfs(index + 1, sum - numbers[index]);
    }
    
    dfs(0, 0);
    
    return answer;
}