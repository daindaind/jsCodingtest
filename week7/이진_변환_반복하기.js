function solution(s) {
  let result = s;
  let count = 0;
  let turnCount = 0;

  const deleteZero = (num) => {
    let count = 0;

    [...num].forEach((item, idx) => {
      if (item === "1") {
        count += 1;
      } else {
        turnCount += 1;
      }
    });

    return count;
  };

  while (result !== "1") {
    result = deleteZero(result).toString(2);
    count++;
  }

  return [count, turnCount];
}
