/* eslint-disable quotes */
const fs = require("fs");

const file = fs.readdirSync("./", "utf8", (err, files) => {
  if (err) throw err;
});

const ourLs = function () {
  process.stdout.write(file.join("\n"));
  process.stdout.write("\n");
  process.stdout.write("prompt > ");
};

module.exports = { ourLs };
