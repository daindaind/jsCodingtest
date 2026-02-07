function solution(k, m, score) {
  let list = [];
  let result = 0;
  let firstIndex = 0;
  let lastIndex = m;
  score.sort((a, b) => b - a);
  while (lastIndex <= score.length) {
    list.push(score.slice(firstIndex, lastIndex));
    firstIndex += m;
    lastIndex += m;
  }
  for (let i = 0; i < list.length; i++) {
    result += list[i][m - 1] * m;
  }
  return result;
}
