function solution(n, left, right) {
  const result = [];

  for (let idx = left; idx <= right; idx++) {
    const i = Math.floor(idx / n);
    const j = idx % n;
    result.push(Math.max(i, j) + 1);
  }

  return result;
}
