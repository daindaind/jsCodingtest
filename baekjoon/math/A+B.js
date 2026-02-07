const fs = require('fs');
const input = fs.readFileSync(0).toString().split('\n');

let cursor = 0;

while (cursor < input.length) {
    const parsedStr = input[cursor].trim();
    if (!parsedStr) break;

    const count = parseInt(parsedStr);
    cursor++;

    for (let i = 0; i < count; i++) {
        const currentParsedStr = input[cursor].trim();
        const [first, second] = currentParsedStr.split(' ');
        console.log(parseInt(first) + parseInt(second));
        cursor++;
    }
}