function solution(n, m) {
  let firstDivisorList = [];
  let firstMultipleList = [];
  let secondDivisorList = [];
  let secondMultipleList = [];
  // 최대공약수 구하기
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) firstDivisorList.push(i);
  }
  for (let j = 1; j <= m; j++) {
    if (m % j === 0) secondDivisorList.push(j);
  }
  const devisorResult = firstDivisorList.filter((x) =>
    secondDivisorList.includes(x)
  );

  // 최소공배수 구하기
  for (let k = 1; k <= n * m; k++) {
    const res = firstMultipleList.filter((x) => secondMultipleList.includes(x));
    if (res.length > 0) {
      break;
    }
    firstMultipleList.push(n * k);
    secondMultipleList.push(m * k);
  }

  const multipleResult = firstMultipleList.filter((x) =>
    secondMultipleList.includes(x)
  );
  return [devisorResult[devisorResult.length - 1], multipleResult[0]];
}
