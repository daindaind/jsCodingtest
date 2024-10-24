function solution(people, limit) {
  let sortedList = people.sort((a, b) => a - b);
  let left = 0;
  let right = sortedList.length - 1;
  let count = 0;

  while (left <= right) {
    if (sortedList[left] + sortedList[right] <= limit) {
      left++;
    }

    right--;
    count++;
  }

  return count;
}
