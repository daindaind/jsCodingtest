function solution(s) {
  let result = "";
  let isTab = false;
  [...s].forEach((spell, index) => {
    if (spell === " ") {
      isTab = true;
      result = result + " ";
    } else {
      if (index === 0) {
        result = result + spell.toUpperCase();
      } else {
        if (isTab) {
          result = result + spell.toUpperCase();
        } else {
          result = result + spell.toLowerCase();
        }
      }

      isTab = false;
    }
  });

  return result;
}
