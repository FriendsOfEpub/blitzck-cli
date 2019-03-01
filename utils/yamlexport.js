const json2yaml = require("json2yaml")

module.exports = (database) => {
  console.log(`\n${json2yaml.stringify(database)}\n`);
}