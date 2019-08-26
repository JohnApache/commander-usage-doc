const program = require('commander');

program.parse(process.argv);

console.log('this is default command');
console.log(program.args); // 传入的参数