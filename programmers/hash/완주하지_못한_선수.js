function solution(participant, completion) {
  const map = {};

  participant.forEach((name) => {
    map[name] = (map[name] || 0) + 1;
  });

  completion.forEach((name) => {
    map[name]--;
  });

  for (const name in map) {
    if (map[name] > 0) return name;
  }
}
