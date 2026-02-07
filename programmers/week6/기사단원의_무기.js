function solution(number, limit, power) {
  // number : 기사단원의 수
  // limit : 제한 수치를 나타내는 정수
  // power : 무기의 공격력 (kg)
  let result = 0;
  for (let i = 1; i <= number; i++) {
    let numbers = 0;

    // 에라토스테네스의 체 활용
    // X = M x N 라는 것이 있고 M >= N이라고 할 때,
    // M은 언제나 sqrt(X)보다 크거나 같다.
    // N은 언제나 sqrt(X)보다 작거나 같다.
    // sqrt(X)보다 작거나 같은 수로 % 연산자를 활용해 나머지가 0이면
    // 해당 수는 약수로 판별될 수 있는데, 단, 해당 수의 제곱(Math.pow(j, 2))이 i와 같으면
    // 약수를 하나로 쳐준다. 그 외 경우는 약수는 서로 짝을 이루고 있을 것이므로 2개로 간주한다.
    for (let j = 1; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        if (Math.pow(j, 2) === i) {
          numbers += 1;
        } else {
          numbers += 2;
        }
      }
    }

    if (numbers <= limit) {
      result += numbers;
    } else {
      result += power;
    }
  }
  return result;
}
