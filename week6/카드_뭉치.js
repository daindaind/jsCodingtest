function solution(cards1, cards2, goal) {
  let goal1 = [...goal];
  let goal2 = [...goal];
  let result1 = false;
  let result2 = false;
  for (let i = 0; i < cards2.length; i++) {
    for (let j = 0; j < goal1.length; j++) {
      if (cards2[i] === goal1[j]) {
        goal1.splice(j, 1);
      }
    }
  }
  for (let k = 0; k < goal1.length; k++) {
    if (cards1[k] === goal1[k]) {
      result1 = true;
    } else {
      result1 = false;
    }
  }

  for (let i = 0; i < cards1.length; i++) {
    for (let j = 0; j < goal2.length; j++) {
      if (cards1[i] === goal2[j]) {
        goal2.splice(j, 1);
      }
    }
  }

  for (let k = 0; k < goal2.length; k++) {
    if (cards2[k] === goal2[k]) {
      result2 = true;
    } else {
      result2 = false;
    }
  }

  return result1 && result2 ? "Yes" : "No";
}
