function solution(n) {
  let num = n;
  let count = 0;

  while (num > 0) {
    if (num % 2) {
      num -= 1;
      num = num / 2;
      count += 1;
    } else {
      num = num / 2;
    }
  }

  return count > 0 ? count : 2;
}
