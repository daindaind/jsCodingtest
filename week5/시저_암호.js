function solution(s, n) {
  const list = Array.from(s);
  let result = [];
  const alphaS = "abcdefghijklmnopqrstuvwxyz";
  const alphaL = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i = 0; i < list.length; i++) {
    if (list[i] === " ") {
      result.push(" ");
      continue;
    }
    for (let j = 0; j < alphaL.length; j++) {
      if (list[i] === alphaL[j]) {
        if (j + 1 + n > alphaL.length) {
          result.push(alphaL[j + n - alphaL.length]);
          break;
        } else {
          result.push(alphaL[j + n]);
          break;
        }
      }
    }
    for (let j = 0; j < alphaS.length; j++) {
      if (list[i] === alphaS[j]) {
        if (j + 1 + n > alphaS.length) {
          result.push(alphaS[j + n - alphaS.length]);
          break;
        } else {
          result.push(alphaS[j + n]);
          break;
        }
      }
    }
  }
  return result.join("");
}
