require("console.table");

module.exports = (database, title) => {
  console.table(`\n${title}`, database);
}