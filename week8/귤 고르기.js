function solution(k, tangerine) {
  const countMap = new Map();

  tangerine.forEach((size) => {
    countMap.set(size, (countMap.get(size) || 0) + 1);
  });

  const sortedCounts = Array.from(countMap.values()).sort((a, b) => b - a);

  let count = 0;
  for (let freq of sortedCounts) {
    k -= freq;
    count++;
    if (k <= 0) break;
  }

  return count;
}
