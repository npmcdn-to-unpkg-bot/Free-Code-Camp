var fs = require('fs');
var buffer = fs.readFileSync(process.argv[2], 'utf8');
var str = buffer.split('\n');
console.log(str.length - 1);
