function solution(price, money, count) {
  let result = 0;
  for (let i = 1; i <= count; i++) {
    result += price * i;
  }
  return result - money < 0 ? 0 : Math.abs(result - money);
}
