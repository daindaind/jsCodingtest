function solution(n, a, b) {
  var answer = 1;
  while (a !== b) {
    a = Math.round(a / 2);
    b = Math.round(b / 2);
    if (a === b) {
      return answer;
    }
    answer++;
  }

  return answer;
}
