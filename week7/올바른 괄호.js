function solution(s) {
  const stringList = Array.from(s);
  let stack = [];

  for (let item of stringList) {
    if (item === "(") {
      stack.push("(");
    } else {
      // ')'
      if (stack.length === 0) {
        return false;
      } else {
        stack.pop();
      }
    }
  }

  return stack.length === 0; // 모든 괄호가 다 짝이 맞다.
}
