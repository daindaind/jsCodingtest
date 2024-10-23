function solution(people, limit) {
  let sortedList = people.sort((a, b) => a - b);
  let limitCheck = sortedList[0];
  let count = 0;
  for (let i = 1; i < sortedList.length; i++) {
    if (limitCheck >= limit) {
      limitCheck = sortedList[i];
      count += 1;
    } else {
      limitCheck += sortedList[i];
    }
  }

  console.log(count);
}
