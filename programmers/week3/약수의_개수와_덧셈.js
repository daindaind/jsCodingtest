function solution(left, right) {
  let result = 0;
  for (let i = left; i <= right; i++) {
    let list = [];
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) list.push(j);
    }
    list.length % 2 ? (result -= i) : (result += i);
  }
  return result;
}
