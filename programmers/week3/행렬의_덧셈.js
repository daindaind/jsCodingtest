function solution(arr1, arr2) {
  let list = [];
  for (let i = 0; i < arr1.length; i++) {
    let numberList = [];
    for (let j = 0; j < arr1[i].length; j++) {
      numberList.push(arr1[i][j] + arr2[i][j]);
    }
    list.push(numberList);
  }
  return list;
}
