function solution(n, arr1, arr2) {
  let list1 = [];
  let list2 = [];
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    let str = "";
    let num = arr1[i];
    while (num !== 0) {
      str += (num % 2) + "";
      num = parseInt(num / 2);
    }
    if (str.length < n) {
      for (let t = 0; t < n; t++) {
        if (!str[t]) {
          str += 0 + "";
        }
      }
    }
    list1.push(Array.from(str).reverse().join(""));
  }
  for (let i = 0; i < arr2.length; i++) {
    let str = "";
    let num = arr2[i];
    while (num !== 0) {
      str += (num % 2) + "";
      num = parseInt(num / 2);
    }
    if (str.length < n) {
      for (let t = 0; t < n; t++) {
        if (!str[t]) {
          str += 0 + "";
        }
      }
    }
    list2.push(Array.from(str).reverse().join(""));
  }

  for (let k = 0; k < list1.length; k++) {
    let str = "";
    for (let j = 0; j < n; j++) {
      if (parseInt(list1[k][j]) + parseInt(list2[k][j]) === 0) {
        str += " ";
      } else {
        str += "#";
      }
    }
    result.push(str);
  }
  return result;
}
