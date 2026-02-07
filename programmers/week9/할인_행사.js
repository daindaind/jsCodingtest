function solution(want, number, discount) {
  let answer = 0;
  for (let i = 0; i < discount.length - 9; i++) {
    let j;
    for (j = 0; j < want.length; j++) {
      let check = 0;
      for (let k = i; k < i + 10; k++) {
        if (discount[k] === want[j]) check++;
      }
      if (check < number[j]) break;
    }
    if (j === want.length) answer++;
  }

  return answer;
}
