function solution(food) {
  const foodList = food.slice(1, food.length);
  let result = [];
  for (let i = 0; i < foodList.length; i++) {
    if (foodList[i] % 2 === 1) {
      for (let j = 0; j < parseInt(foodList[i] - 1) / 2; j++) {
        result.push(i + 1);
      }
    } else {
      for (let j = 0; j < parseInt(foodList[i] / 2); j++) {
        result.push(i + 1);
      }
    }
  }
  result.push(0);
  for (let i = foodList.length - 1; i >= 0; i--) {
    if (foodList[i] % 2 === 1) {
      for (let j = 0; j < parseInt(foodList[i] - 1) / 2; j++) {
        result.push(i + 1);
      }
    } else {
      for (let j = 0; j < parseInt(foodList[i] / 2); j++) {
        result.push(i + 1);
      }
    }
  }
  return result.join("");
}
