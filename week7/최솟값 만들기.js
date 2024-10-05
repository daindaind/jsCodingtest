function solution(A, B) {
  // 배열 A, B에서 각각 한 개의 숫자를 뽑아 두 수를 곱한다.
  // 어떻게 뽑아서 곱하고 더해야 최소가 될까?

  // 가장 작은 수와 가장 큰 수가 곱해진 것을 누적하여 더하면
  // 곱한 것의 수가 최대한 작은 수가 나오게 될 것이다.
  const sortedA = A.sort((a, b) => a - b);
  const sortedB = B.sort((a, b) => b - a);

  return sortedA.reduce((acc, item, index) => acc + item * sortedB[index], 0);
}
