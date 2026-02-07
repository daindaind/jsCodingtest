function solution(s) {
  let count = 0;
  let stringList = Array.from(s);
  let stack = [];
  // 1. 주어진 문자열이 바르더라도, 무조건 회전이 필요
  // 2. 가장 적은 회전 횟수
  // 3. 끝까지 회전시켜도 올바른 괄호를 만들 수 없을 때 0 반환

  function checkStringList(list) {
    for (let item of list) {
      // 소괄호일 때
      if (item === "(") {
        stack.push("(");
      } else if (item === ")") {
        if (!stack.find((item) => item === "(")) {
          return false;
        } else {
          stack.pop();
        }
      }

      // 중괄호일 때
      if (item === "{") {
        stack.push("{");
      } else if (item === "}") {
        if (!stack.find((item) => item === "{")) {
          return false;
        } else {
          stack.pop();
        }
      }

      // 대괄호일 때
      if (item === "[") {
        stack.push("[");
      } else if (item === "]") {
        if (!stack.find((item) => item === "[")) {
          return false;
        } else {
          stack.pop();
        }
      }
    }

    return stack.length === 0 ? true : false;
  }

  // 배열 회전
  for (let item of stringList) {
    const result = checkStringList(stringList);
    if (result) {
      count += 1;
    }
    const [removed] = stringList.splice(0, 1);
    stringList.push(removed);
  }

  return count;
}
