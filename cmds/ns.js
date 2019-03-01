const namespaces = require("../data/nsdata.json");
const makeList = require("../utils/makelist");
const listAll = require("../utils/listall");
const jexp = require("../utils/jsonexport");
const xexp = require("../utils/xmlexport");
const yexp = require("../utils/yamlexport");
const help = require("./help");

module.exports = (args) => {
  try {
    const search = args.search || args.s;
    const all = args.all || args.a;
    const list = args.list || args.l;
    const json = args.json || args.j;
    const xml = args.xml || args.x;
    const yaml = args.yaml || args.y;

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
      listAll(namespaces, "Namespaces");
    } else if (list) {
      makeList(namespaces, "ns", "namespaces");
    } else if (json) {
      jexp(result);
    } else if (xml) {
      xexp("namespaces", "namespace", result)
    } else if (yaml) {
      yexp(result);
    } else {
      help(args);
    }

  } catch (err) {
    console.error(err)
  }
}