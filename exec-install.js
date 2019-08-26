const program = require('commander');

program.parse(process.argv);

console.log('this is install command');
console.log(program.args); // 传入的参数