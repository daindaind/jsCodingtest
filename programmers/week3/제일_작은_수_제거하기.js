function solution(arr) {
  let number = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (number > arr[i]) {
      number = arr[i];
    }
  }
  const result = arr.filter((num) => num !== number);
  return result.length === 0 ? [-1] : result;
}
