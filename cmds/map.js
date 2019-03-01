const mappings = require("../data/mapdata.json");
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
      listAll(mappings, "ARIA Mappings");
    } else if (list) {
      makeList(mappings, "type", "epub:types");
    } else if (json) {
      jexp(result);
    } else if (xml) {
      xexp("aria-mappings", "mapping", result)
    } else if (yaml) {
      yexp(result);
    } else {
      help(args);
    }

  } catch (err) {
    console.error(err)
  }
}