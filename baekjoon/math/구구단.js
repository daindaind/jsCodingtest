const fs = require('fs');
const input = fs.readFileSync(0).toString().split('\n');

const N = parseInt(input[0]);

for (let i = 0; i < 9; i++) {
    const result = N * (i + 1);
    console.log(`${N} * ${i + 1} = ${result}`);
}