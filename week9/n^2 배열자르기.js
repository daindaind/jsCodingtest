function solution(n, left, right) {
  let list = [];
  let arr = [];

  for (let i = 1; i <= n; i++) {
    let row = [];
    for (let j = 1; j <= n; j++) {
      if (i < j) {
        row.push(j);
      } else {
        row.push(i);
      }
    }
    list.push(row);
  }

  list.forEach((item) => {
    arr.push(...item);
  });

  return arr.slice(left, right + 1);
}
