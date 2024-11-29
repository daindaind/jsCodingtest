function solution(want, number, discount) {
  let days = 1;
  let count = 0;
  let startIndex = 0;
  while (startIndex < 5) {
    for (let i = 0; i < discount.length; i++) {
      if (days === 10) {
        break;
      }
      const find = want.find((wantItem) => discount[i] === wantItem);
      if (find) {
        number[want.indexOf(discount[i])] =
          number[want.indexOf(discount[i])] - 1;
      }
      days += 1;
    }
    if (number.reduce((acc, sum) => (sum += acc), 0) === 0) {
      count += 1;
    }
    startIndex += 1;
  }

  console.log(number);
}
