function solution(n) {
  function fibo(num) {
    if (num === 1) return 1;

    let stack = [1, 1];
    for (let i = 2; i < n + 1; i++) {
      let number = (stack[i - 1] % 1234567) + (stack[i - 2] % 1234567);
      stack.push(number % 1234567);
    }

    return stack[num] % 1234567;
  }

  const result = fibo(n);
  return result % 1234567;
}
