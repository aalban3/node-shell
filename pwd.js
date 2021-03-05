/* eslint-disable eol-last */
/* eslint-disable func-names */
const pwd = function () {
  process.stdout.write(__dirname);
  process.stdout.write('\nprompt > ');
};

module.exports = { pwd };