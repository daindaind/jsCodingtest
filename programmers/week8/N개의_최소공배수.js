function solution(arr) {
  let result = arr[0];

  // 최대공약수를 구하는 함수
  function gcd(a, b) {
    let r;
    while (b != 0) {
      r = a % b;
      a = b;
      b = r;
    }
    return a;
  }

  for (let i = 1; i < arr.length; i++) {
    result = (result * arr[i]) / gcd(result, arr[i]);
  }

  return result;
}
