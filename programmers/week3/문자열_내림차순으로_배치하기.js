function solution(s) {
  let result = "";
  Array.from(s)
    .sort((a, b) => (a < b ? 1 : a > b ? -1 : 0))
    .map((item) => (result += item));
  return result;
}
