// 효율성 테스트 필요

function solution(n) {
  let count = 0;
  for (let i = 2; i <= n; i++) {
    let isNum = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isNum = false;
        break;
      }
    }
    if (isNum) {
      count += 1;
    }
  }
  return count;
}
