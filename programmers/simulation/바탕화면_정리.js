function solution(wallpaper) {
    // 1. 아주 큰 값과 아주 작은 값으로 초기화
    // r : 행
    // c : 열
    let minR = 50, minC = 50;
    let maxR = 0, maxC = 0;
    
    // 2. 바탕화면 전체를 뒤진다. (순회)
    for (let r = 0; r < wallpaper.length; r++) {
        for (let c = 0; c < wallpaper[0].length; c++) {
            
            // console.log(`minR: ${minR}, minC: ${minC}, maxR: ${maxR}, maxC: ${maxC}`)
            // 3. 파일 발견 시 현재 좌표로 최솟값, 최댓값 갱신
            if (wallpaper[r][c] === '#') {
                minR = Math.min(minR, r);
                minC = Math.min(minC, c);
                maxR = Math.max(maxR, r);
                maxC = Math.max(maxC, c);

            }
        }
    }
    
    return [minR, minC, maxR + 1, maxC + 1];
}