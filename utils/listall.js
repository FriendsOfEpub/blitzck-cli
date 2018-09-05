module.exports = (database, prop, val, name) => {
  let listing = ``;
  for (let i in database) {
    listing += `${database[i][prop]}: ${database[i][val]}\n`;
  }
  console.log(`\nHere is the list of ${name} in the database:\n\n${listing}`);
}