const fs = require('fs');
const input = fs.readFileSync(0).toString().split('\n');

let cursor = 0;

while (input[cursor] !== '0 0') {
    const [first, second] = input[cursor].trim().split(' ');
    console.log(parseInt(first) + parseInt(second));
    cursor++;
}