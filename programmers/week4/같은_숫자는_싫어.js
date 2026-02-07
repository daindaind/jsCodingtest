function solution(arr) {
  let num = arr[0];
  let list = arr;
  let result = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (list[i] === num) {
      continue;
    }
    num = list[i];
    result.push(list[i]);
  }
  return result;
}
