const program = require('commander');

program.parse(process.argv);

console.log('this is publish command');
console.log(program.args); // 传入的参数