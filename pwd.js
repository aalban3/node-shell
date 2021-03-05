const pwd = function () {
  process.stdout.write(__dirname);
  process.stdout.write('\nprompt > ');
};

module.exports = { pwd };