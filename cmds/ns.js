const namespaces = require("../data/nsdata");
const makeList = require("../utils/makelist");
const listAll = require("../utils/listall");
const help = require("./help");

module.exports = (args) => {
  try {
    const search = args.search || args.s;
    const all = args.all || args.a;
    const list = args.list || args.l;

    let result = namespaces;

    if (search) {
      let ns = search.toLowerCase();
      let idx = namespaces.findIndex(x => x.ns === ns);

      if (idx >= 0) {
        result = namespaces[idx].url;
        console.log(`\n${ns} namespace is "${result}"\n`);
      } else {
        console.log(`\n${ns} is not in the database.`);
        makeList(namespaces, "ns", "namespaces");
      }
    } else if (all) {
      listAll(namespaces, "ns", "url", "namespaces");
    } else if (list) {
      makeList(namespaces, "ns", "namespaces");
    } else {
      help(args);
    }

  } catch (err) {
    console.error(err)
  }
}