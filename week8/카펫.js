function solution(brown, yellow) {
  let row = 0;
  let column = 0;

  for (let i = 1; i <= yellow; i++) {
    // 가로
    for (let j = yellow; j >= 1; j--) {
      // 세로
      if (i * j === yellow) {
        if ((i + 2) * (j + 2) - yellow === brown) {
          row = i + 2;
          column = j + 2;
          break;
        }
      }
    }
  }

  return [row, column];
}
