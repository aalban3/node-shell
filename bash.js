/* eslint-disable quotes */
/* eslint-disable prefer-template */
/* eslint-disable brace-style */
/* eslint-disable no-trailing-spaces */
const printDir = require("./pwd");
const printLs = require("./ls");
const printContent = require("./cat");
const printWebsite = require('./curl.js');

process.stdout.write("prompt >");

process.stdin.on("data", (data) => {
  const userInput = data.toString().trim().split(" ");
  const cmd = userInput[0];
  const arg = userInput[1];

  if (cmd === "pwd") {
    printDir.pwd();
  } else if (cmd === "ls") {
    printLs.ourLs();
  } else if (cmd === "cat") {
    printContent.content(arg);
  } else if (cmd === "curl") {
    printWebsite.curler(arg);
  } else {
    process.stdout.write("You typed: " + cmd);
    process.stdout.write("\nprompt > ");
  }
});

// curl http://www.google.com