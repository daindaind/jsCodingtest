function solution(arr) {
  const result = [];
  for (const num of arr) {
    if (result.length === 0 || result[result.length - 1] !== num) {
      result.push(num);
    }
  }
  return result;
}
