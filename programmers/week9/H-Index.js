function solution(citations) {
  const sortedCitations = citations.sort((a, b) => b - a);

  let hIndex = 0;
  for (let i = 0; i < sortedCitations.length; i++) {
    if (sortedCitations[i] >= i + 1) {
      hIndex = i + 1;
    } else {
      break;
    }
  }

  return hIndex;
}
