function solution(s) {
  let stack = [];
  let list = [...s];

  for (let i = 0; i < s.length; i++) {
    if (stack.length > 0 && stack[stack.length - 1] === list[i]) {
      stack.pop();
    } else {
      stack.push(list[i]);
    }
  }

  return stack.length > 0 ? 0 : 1;
}
