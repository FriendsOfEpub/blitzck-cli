module.exports = (database, prop, name) => {
  let listing = ``;
  for (let i in database) {
    listing += `- ${database[i][prop]}\n`;
  }
  console.log(`\nHere is the list of ${name} in the database:\n${listing}`);
}