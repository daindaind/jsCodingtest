const fs = require('fs');
const input = fs.readFileSync(0).toString().split('\n');

let cursor = 0;

while (cursor < input.length) {
    const count = parseInt(input[cursor].trim());
    if (!count) break;
    cursor++;

    for (let i = 0; i < count; i++) {
        const currentStr = input[cursor].trim();
        const [first, second] = currentStr.split(' ');

        console.log(`Case #${i + 1}: ${parseInt(first) + parseInt(second)}`);
        cursor++;
    }
}