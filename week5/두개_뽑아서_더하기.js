function solution(numbers) {
  let result = [];
  let number = 0;
  for (let i = 0; i < numbers.length; i++) {
    number = numbers[i];
    const list = numbers.slice(i + 1, numbers.length);
    for (let j = 0; j < list.length; j++) {
      result.push(number + list[j]);
    }
  }
  const resultSet = new Set(result.sort((a, b) => a - b));
  return Array.from(resultSet);
}
