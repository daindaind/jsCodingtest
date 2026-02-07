function solution(rows, columns, queries) {
    let answer = []; 
    
    const matrix = [];
    let num = 1;
    
    // 1. 행렬 초기값 설정
    for (let r = 0; r < rows; r++) {
        const row = [];
        for (let c = 0; c < columns; c++) {
            row.push(num++);
        }
        matrix.push(row);
    }
    
    // 2. 행렬 회전
    // 회전 다 시키고 난 후 가장 작은 값 추출
    for (let query of queries) {
        const [x1, y1, x2, y2] = query.map(v => v - 1);
        
        let temp = matrix[x1][y1]; // 회전 테두리 초기값 저장
        let minVal = temp;
        
        // 왼쪽 변 : 아래에서 위로 
        for (let i = x1; i < x2; i++) {
            matrix[i][y1] = matrix[i + 1][y1];
            minVal = Math.min(minVal, matrix[i][y1]);
        }
        
        // 아래쪽 변 : 오른쪽에서 왼쪽으로
        for (let i = y1; i < y2; i++) {
            matrix[x2][i] = matrix[x2][i + 1];            
            minVal = Math.min(minVal, matrix[x2][i]);
        }
        
        // 오른쪽 변 : 위에서 아래로
        for (let i = x2; i > x1; i--) {
            matrix[i][y2] = matrix[i - 1][y2];
            minVal = Math.min(minVal, matrix[i][y2]);
        }
        
        // 위쪽 변 : 왼쪽에서 오른쪽으로
        for (let i = y2; i > y1; i--) {
            matrix[x1][i] = matrix[x1][i - 1];
            minVal = Math.min(minVal, matrix[x1][i]);
        }
        
        // 보관한 값 넣기
        matrix[x1][y1 + 1] = temp;
        
        // 가장 작은 값 업데이트
        answer.push(minVal);
    }
    
    return answer;
}