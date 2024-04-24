function solution(t, p) {
  const numLength = p.length;
  let list = [];
  for (let i = 0; i < t.length; i++) {
    if (i + numLength <= t.length) {
      list.push(t.slice(i, i + numLength));
    } else {
      break;
    }
  }
  return list.filter((item) => item <= p).length;
}
