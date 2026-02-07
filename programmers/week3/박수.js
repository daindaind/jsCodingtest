function solution(n) {
  let result = "";
  new Array(n).fill(0).map((item, index) => {
    if (index % 2) {
      result += "박";
    } else {
      result += "수";
    }
  });
  return result;
}
