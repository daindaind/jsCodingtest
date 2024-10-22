function solution(n, words) {
  let num = 1;
  let turn = 1;
  let stop = false;

  for (let i = 1; i < words.length; i++) {
    if (num !== n) {
      num += 1;
    } else {
      num = 1;
      turn += 1;
    }

    // 다른 단어를 말했을 경우
    if (words[i - 1][words[i - 1].length - 1] !== words[i][0]) {
      stop = true;
      break;
    }
    // 이미 말했던 단어일 경우
    else if (words.slice(0, i).includes(words[i])) {
      stop = true;
      break;
    }
  }

  return stop ? [num, turn] : [0, 0];
}
