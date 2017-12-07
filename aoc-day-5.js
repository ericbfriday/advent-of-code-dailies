// node answer from : https://www.reddit.com/r/adventofcode/comments/7hngbn/2017_day_5_solutions/dqse1tx/
// part 1
const fs = require('fs');

fs.readFile(__dirname + '/input.txt', 'utf8', (err, data) => {
    data = data.trim();
    data = data.split('\n').map(x => parseInt(x));
    var count = 0;
    var offset = 0;
    while(offset >= 0 && offset < data.length) {
        offset += data[offset]++;
        count++;
    }

    console.log(count);
});

//part 2
const fs = require('fs');

fs.readFile(__dirname + '/input.txt', 'utf8', (err, data) => {
    data = data.trim();
    data = data.split('\n').map(x => parseInt(x));
    var count = 0;
    var offset = 0;
    while(offset >= 0 && offset < data.length) {
        var toffset = offset;
        offset += data[offset];
        data[toffset] += data[toffset] >= 3 ? -1 : 1;
        count++;
    }

    console.log(count);
});
