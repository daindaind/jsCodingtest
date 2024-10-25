function solution(k, tangerine) {
  let dic = [];
  new Set(tangerine).forEach((item) => {
    dic.push({
      name: item,
      count: 0,
    });
  });

  dic.forEach((dicItem) => {
    const list = tangerine.filter((item) => item === dicItem.name);
    dicItem.count = list.length;
  });

  // dic의 결과
  // [
  //   { name: 1, count: 1 },
  //   { name: 3, count: 2 },
  //   { name: 2, count: 2 },
  //   { name: 5, count: 2 },
  //   { name: 4, count: 1 }
  // ]
}
