const mappings = require("../data/mapdata.json");
const makeList = require("../utils/makelist");
const listAll = require("../utils/listall");
const help = require("./help");

module.exports = (args) => {
  try {
    const search = args.search || args.s;
    const all = args.all || args.a;
    const list = args.list || args.l;

    let result = mappings;

    if (search) {
      let type = search.toLowerCase();
      let idx = mappings.findIndex(x => x.type === type);

      if (idx >= 0) {
        result = mappings[idx].aria;
        console.log(`\nepub:type "${type}" is "${result}" in aria\n`);
      } else {
        console.log(`\n${type} is not in the database.`);
        makeList(mappings, "type", "epub:types");
      }
    } else if (all) {
      listAll(mappings, "type", "aria", "epub:types");
    } else if (list) {
      makeList(mappings, "type", "epub:types");
    } else {
      help(args);
    }

  } catch (err) {
    console.error(err)
  }
}