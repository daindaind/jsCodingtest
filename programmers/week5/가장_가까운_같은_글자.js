function solution(s) {
  let result = [];
  for (let i = 0; i < s.length; i++) {
    const frontStr = s.slice(0, i);
    if (frontStr) {
      let isPushed = false;
      const reversedFrontStrList = Array.from(frontStr).reverse();
      for (let j = 0; j < reversedFrontStrList.length; j++) {
        if (reversedFrontStrList[j] === s[i]) {
          result.push(j + 1);
          isPushed = true;
          break;
        }
      }
      if (!isPushed) {
        result.push(-1);
      }
    } else {
      result.push(-1);
    }
  }
  return result;
}
