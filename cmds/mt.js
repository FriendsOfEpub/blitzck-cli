const mediatypes = require("../data/mtdata.json");
const makeList = require("../utils/makelist");
const listAll = require("../utils/listall");
const help = require("./help");

module.exports = (args) => {
  try {
    const search = args.search || args.s;
    const all = args.all || args.a;
    const list = args.list || args.l;

    let result = mediatypes;

    if (search) {
      let f = search.toLowerCase();
      let idx = mediatypes.findIndex(x => x.f === f);

      if (idx >= 0) {
        result = mediatypes[idx].mt;
        console.log(`\n${f} media type is "${result}"\n`);
      } else {
        console.log(`\n${f} is not in the database.`);
        makeList(mediatypes, "f", "media types");
      }
    } else if (all) {
      listAll(mediatypes, "f", "mt", "media types");
    } else if (list) {
      makeList(mediatypes, "f", "media types");
    } else {
      help(args);
    }

  } catch (err) {
    console.error(err)
  }
}