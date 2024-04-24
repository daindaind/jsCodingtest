function solution(s) {
  const checkList = [
    {
      num: 0,
      alpha: "zero",
    },
    {
      num: 1,
      alpha: "one",
    },
    {
      num: 2,
      alpha: "two",
    },
    {
      num: 3,
      alpha: "three",
    },
    {
      num: 4,
      alpha: "four",
    },
    {
      num: 5,
      alpha: "five",
    },
    {
      num: 6,
      alpha: "six",
    },
    {
      num: 7,
      alpha: "seven",
    },
    {
      num: 8,
      alpha: "eight",
    },
    {
      num: 9,
      alpha: "nine",
    },
    {
      num: 10,
      alpha: "ten",
    },
  ];
  let result = "";
  let nowIndex = 0;
  for (let i = 0; i < s.length; i++) {
    if (!isNaN(s.slice(nowIndex, nowIndex + 1))) {
      result += s.slice(nowIndex, nowIndex + 1);
      nowIndex += 1;
      continue;
    } else {
      for (let j = 0; j < checkList.length; j++) {
        let slicedString = s.slice(
          nowIndex,
          nowIndex + checkList[j].alpha.length
        );
        if (slicedString === checkList[j].alpha) {
          result += checkList[j].num;
          nowIndex += checkList[j].alpha.length;
          break;
        } else {
          continue;
        }
      }
    }
  }
  return parseInt(result);
}
