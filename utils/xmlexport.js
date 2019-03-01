const js2xml = require("js2xmlparser")

module.exports = (root, name, database) => {
  let obj = {
    [name]: database
  };
  console.log(`\n${js2xml.parse(root, obj)}\n`);
}