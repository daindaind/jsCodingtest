function solution(n, m, section) {
  // n : 구역의 개수
  // m : 롤러의 길이
  // section : 구역의 번호가 담긴 정수배열
  let count = 0;
  let list = new Array(n).fill(1);
  for (let i = 0; i < section.length; i++) {
    list.splice(section[i] - 1, 1, 0);
  }
  for (let j = 0; j < list.length; j++) {
    if (list[j] === 0) {
      list.splice(j, 1, 1);
      j += m - 1;
      count += 1;
      continue;
    }
  }

  return count;
}
