function solution(array, commands) {
  const result = [];
  for (let t = 0; t < commands.length; t++) {
    const i = commands[t][0];
    const j = commands[t][1];
    const k = commands[t][2];

    const newList = array.slice(i - 1, j).sort((a, b) => a - b);
    result.push(newList[k - 1]);
  }
  return result;
}
