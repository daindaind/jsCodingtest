function solution(n) {
  function fibo(num) {
    return num >= n ? fibo(num - 1) + fibo(num - 2) : num;
  }

  const result = fibo(n);
  return result;
}
