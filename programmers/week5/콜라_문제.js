function solution(a, b, n) {
  let cola = n - parseInt(n / a) * a + parseInt(n / a) * b;
  let newCola = parseInt(n / a) * b;
  while (cola >= a) {
    newCola += parseInt(cola / a) * b;
    cola = cola - parseInt(cola / a) * a + parseInt(cola / a) * b;
  }
  return newCola;
}
