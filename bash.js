/* eslint-disable prefer-template */
/* eslint-disable brace-style */
/* eslint-disable no-trailing-spaces */
const printDir = require('./pwd');
const printLs = require('./ls');

process.stdout.write('prompt >');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  
  if (cmd === 'pwd') {
    printDir.pwd();
  } 
  else if (cmd === 'ls') {
    printLs.ls();
  }
  else {
    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > ');
  }
});
