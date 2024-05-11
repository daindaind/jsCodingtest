function solution(babbling) {
  const list = ["aya", "ye", "woo", "ma"];
  let result = 0;
  for (let i = 0; i < babbling.length; i++) {
    let testWord = babbling[i];
    for (let j = 0; j < list.length; j++) {
      if (testWord.length > 0) {
        if (testWord.indexOf(list[j]) !== -1) {
          const frontWord = testWord.slice(
            testWord.indexOf(list[j]),
            list[j].length + testWord.indexOf(list[j])
          );
          const backWord = testWord.slice(
            list[j].length + testWord.indexOf(list[j]),
            list[j].length + list[j].length + testWord.indexOf(list[j])
          );

          if (frontWord !== backWord) {
            testWord = testWord.slice(
              list[j].length + testWord.indexOf(list[j]),
              testWord.length
            );
          } else {
            break;
          }
        } else {
          if (j === list.length - 1) {
            break;
          }
        }
        if (j === list.length - 1) {
          j = -1;
        }
      } else {
        break;
      }
    }
    if (testWord.length === 0) result += 1;
  }
  return result;
}
