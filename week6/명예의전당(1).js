function solution(k, score) {
  let result = [];
  let HOF = [];
  for (let i = 0; i < score.length; i++) {
    if (HOF.length < k) {
      HOF.push(score[i]);
      const sortedHOF = HOF.sort((a, b) => b - a);
      result.push(sortedHOF[HOF.length - 1]);
    } else {
      HOF.push(score[i]);
      HOF = HOF.sort((a, b) => b - a).slice(0, HOF.length - 1);
      result.push(HOF[HOF.length - 1]);
    }
  }
  return result;
}
