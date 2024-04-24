function solution(n) {
  let num = n;
  let res = "";
  let result = 0;
  let numIndex = 0;
  while (num > 0) {
    res += (num % 3) + "";
    num = parseInt(num / 3);
  }
  numIndex = res.length - 1;
  Array.from(res).map((item, index) => {
    result += parseInt(item) * 3 ** numIndex;
    numIndex -= 1;
  });
  return result;
}
