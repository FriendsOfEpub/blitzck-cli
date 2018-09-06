require("console.table");

module.exports = (database, name) => {
  console.table(`\nHere is the list of ${name} in the database:`, database);
}