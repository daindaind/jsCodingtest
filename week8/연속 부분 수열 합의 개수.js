function solution(elements) {
  let result = [];
  for (let index = 1; index <= elements.length; index++) {
    let answer = [];
    for (let i = 0; i < elements.length; i++) {
      let resultNum = elements[(i + index) % elements.length];
      answer.push(elements[i] + resultNum);
    }
    console.log(answer);
    result.push(...answer);
  }

  const setResult = new Set(result);
  return [...setResult].length;
}
