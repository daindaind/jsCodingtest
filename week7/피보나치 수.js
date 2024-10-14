const getFibonacci = (num) => {
  if (num === 1 || num === 2) {
    return 1;
  }
  list = Array(num).fill(0);
  list[0] = 1;
  list[1] = 1;
  for (let i = 2; i < num; i++) {
    list[i] = (list[i - 1] + list[i - 2]) % 1234567;
  }
  return list[num];
};
