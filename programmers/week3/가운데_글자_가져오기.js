function solution(s) {
  if (s.length % 2) {
    return s[parseInt(s.length / 2)];
  } else {
    return s[parseInt(s.length / 2) - 1] + s[parseInt(s.length / 2)];
  }
}
