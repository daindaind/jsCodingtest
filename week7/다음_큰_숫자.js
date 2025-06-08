function solution(n) {
  const countOne = (number) => {
    return Array.from(number.toString(2)).filter((item) => item === "1").length;
  };

  const oneCount = countOne(n);
  let count = 0;
  let num = n;

  while (oneCount !== count) {
    num++;
    count = countOne(num);
  }

  return num;
}
