function solution(s) {
  return (
    Array.from(s).filter((item) => isNaN(item)).length === 0 &&
    (s.length === 4 || s.length === 6)
  );
}
