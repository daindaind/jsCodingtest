function solution(s) {
  const list = s.split(" ");
  let minus = [];
  let plus = [];

  list.forEach((item) => {
    if (item.includes("-")) {
      minus.push(item);
    } else {
      plus.push(item);
    }
  });

  // 절대값이 작은 수부터 정렬
  // 양수 리스트 result: ['1', '2', '3']
  const sortedPlus = plus.sort((a, b) => parseInt(a) - parseInt(b));

  // 음수 리스트 result: ['-4', '-3', '-2', '-1']
  const sortedMinus = minus.sort(
    (a, b) =>
      parseInt(b.slice(1, b.length).toString()) -
      parseInt(a.slice(1, a.length).toString())
  );

  // 두 리스트를 합침!
  const joinedList = [...sortedMinus, ...sortedPlus];
  return [joinedList[0], joinedList[joinedList.length - 1]].join(" ");
}
