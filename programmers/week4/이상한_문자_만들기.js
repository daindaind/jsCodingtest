function solution(s) {
  const list = s.split(" ");
  let result = [];
  for (let i = 0; i < list.length; i++) {
    let str = "";
    const newString = list[i];
    for (let k = 0; k < newString.length; k++) {
      if (k % 2 === 1) {
        str += newString[k].toLowerCase();
      } else {
        str += newString[k].toUpperCase();
      }
    }
    result.push(str);
  }
  return result.join(" ");
}
