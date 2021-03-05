const fs = require("fs");

const content = function (path) {
  let temp = fs.readFileSync(path, "utf8", (err, files) => {
    if (err) throw err;
  });
  process.stdout.write(temp);
  process.stdout.write("prompt > ");
};
module.exports = { content };
