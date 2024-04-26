function solution(name, yearning, photo) {
  const list = [];
  let result = [];
  for (let i = 0; i < name.length; i++) {
    list.push({ name: name[i], yearn: yearning[i] });
  }
  for (let j = 0; j < photo.length; j++) {
    let count = 0;
    for (let k = 0; k < photo[j].length; k++) {
      for (let h = 0; h < list.length; h++) {
        if (photo[j][k] === list[h].name) {
          count += list[h].yearn;
          break;
        }
      }
    }
    result.push(count);
  }

  return result;
}
