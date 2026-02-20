const fs = require('fs');
const input = fs.readFileSync(0).toString().split('\n');


// set 
// 1. 요소 개수가 1개 -> 모두 같은 눈
// 2. 요소 개수가 2개 -> 2개 같은 눈
// 3. 요소 개수가 3개 -> 3개 다 다른 눈
const list = input[0].split(' '); // ['3', '3', '6']
const inputSet = new Set(list); // {'3', '6'}
const inputSetList = [...inputSet]; // ['3', '6']

// 1. 같은 눈 3 상금 -> 10_000 + (같은 눈) * 1_000
if (inputSetList.length === 1) console.log(10_000 + parseInt(inputSetList[0]) * 1_000);

// 2. 같은 눈 2 상금 -> 1_000 + (같은 눈) * 100
else if (inputSetList.length === 2) {
    const count0 = list.filter(v => v === inputSetList[0]).length;
    const sameNum = count0 === 2 ? inputSetList[0] : inputSetList[1];
    console.log(1_000 + parseInt(sameNum) * 100)
}

// 3. 모두 다른 눈 상금 -> (가장 큰 눈) * 100
else if (inputSetList.length === 3) {
    const sortedList = inputSetList.sort((a, b) => b - a);
    console.log(sortedList[0] * 100);
}
