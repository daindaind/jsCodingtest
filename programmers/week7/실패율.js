function solution(N, stages) {
  // 실패율 : 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
  // N : 전체 스테이지 개수
  // stages : 현재 멈춰있는 스테이지 번호가 담긴 배열
  let data = [];
  for (let i = 1; i <= N; i++) {
    data.push({
      stage: i,
      count: 0, // 클리어를 못한 유저 수
      fail: 0,
    });
  }
  for (let k = 0; k < data.length; k++) {
    for (let j = 0; j < stages.length; j++) {
      if (data[k].stage === stages[j]) {
        data[k].count += 1;
      }
    }
  }

  for (let p = 0; p < data.length; p++) {
    if (data[p].stage === 1) {
      data[p].fail = data[p].count / stages.length;
    } else {
      const list = data.slice(0, p);
      let player = 0;
      for (let i = 0; i < list.length; i++) {
        player += list[i].count;
      }
      data[p].fail = data[p].count / (stages.length - player);
    }
  }
  const result = data
    .sort((a, b) => b.fail - a.fail)
    .map((item, _) => item.stage);
  return result;
}
