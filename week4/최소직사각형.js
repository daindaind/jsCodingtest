function solution(sizes) {
  let widthList = [];
  let heightList = [];
  for (let i = 0; i < sizes.length; i++) {
    if (sizes[i][0] > sizes[i][1]) {
      widthList.push(sizes[i][0]);
      heightList.push(sizes[i][1]);
    } else {
      widthList.push(sizes[i][1]);
      heightList.push(sizes[i][0]);
    }
  }
  return (
    widthList.sort((a, b) => b - a)[0] * heightList.sort((a, b) => b - a)[0]
  );
}
