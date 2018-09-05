const data = require("../data/rawdata");
const makeList = require("../utils/makelist");
const help = require("./help");
require("console.table");

module.exports = (args) => {
  try {
    const search = args.search || args.s;
    const list = args.list || args.l;
    const json = args.json || args.j;

    let result = data;

    if (search) {
      let appName = search.toLowerCase();
      let idx = data.findIndex(x => x.appName === appName);

      if (idx >= 0) {
        appName = data[idx].displayName || search;
        console.log(`\nSupport for ${appName}:`);

        result = data[idx].support;

        if (result.all) {
          console.table(result.all);
        } else {
          for (let os in result) {
            console.table(`\nOn ${os}:`, result[os]);
          }
        }
      } else {
        console.log(`\n${search} is not in the database.`);
        makeList(data, "appName", "Reading Systems");
      }
    } else if (list) {
      makeList(data, "appName", "Reading Systems");
    } else if (json) {
      console.log(`\n${JSON.stringify(result, null, 2)}\n`);
    } else {
      help(args);
    }

  } catch (err) {
    console.error(err)
  }
}