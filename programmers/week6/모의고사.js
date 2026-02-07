function solution(answers) {
  const student1 = [1, 2, 3, 4, 5];
  const student2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const student3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let list = [0, 0, 0];
  let result = [];
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === student1[i % student1.length]) {
      list[0] += 1;
    }
    if (answers[i] === student2[i % student2.length]) {
      list[1] += 1;
    }
    if (answers[i] === student3[i % student3.length]) {
      list[2] += 1;
    }
  }
  const maxNum = Math.max(...list);
  for (let i = 0; i < list.length; i++) {
    if (maxNum === list[i]) {
      result.push(i + 1);
    }
  }
  return result;
}
