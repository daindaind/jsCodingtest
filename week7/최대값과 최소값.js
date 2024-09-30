function solution(s) {
  const list = s.split(" ");
  let minusList = [];
  let plusList = [];

  list.map((item, index) => {
    if (item.includes("-")) {
      minusList.push(item);
    } else {
      plusList.push(item);
    }
  });

  plusList = plusList.sort(function (a, b) {
    if (parseInt(a) > parseInt(b)) return 1;
    if (parseInt(a) === parseInt(b)) return 0;
    if (parseInt(a) < parseInt(b)) return -1;
  });

  minusList = minusList.sort(function (a, b) {
    if (parseInt(a) > parseInt(b)) return 1;
    if (parseInt(a) === parseInt(b)) return 0;
    if (parseInt(a) < parseInt(b)) return -1;
  });
}
