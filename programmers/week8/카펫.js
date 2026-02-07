function solution(brown, yellow) {
  for (let i = 1; i <= Math.sqrt(yellow); i++) {
    if (yellow % i === 0) {
      const j = yellow / i;

      if ((i + 2) * (j + 2) - yellow === brown) {
        return [j + 2, i + 2];
      }
    }
  }
}
