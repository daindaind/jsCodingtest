function solution(n) {
  let stack = Array.from({ length: n }, (_, index) => index + 1);
  let count = 0;

  // 홀수인 약수의 개수
  stack.forEach((num, idx) => {
    if (n % num === 0 && num % 2 === 1) {
      count++;
    }
  });

  return count;
}
