function solution(strings, n) {
  let list = [];
  let result = [];
  strings.map((item, index) => {
    list.push({
      key: Array.from(item)[n],
      str: item,
    });
  });
  list
    .sort((a, b) => {
      const str1 = a.key;
      const str2 = b.key;
      if (str1 === str2) {
        if (a.str > b.str) {
          return 1;
        } else {
          return -1;
        }
      } else if (str1 < str2) {
        return -1;
      } else if (str1 > str2) {
        return 1;
      } else {
        return 0;
      }
    })
    .map((item) => result.push(item.str));
  return result;
}
