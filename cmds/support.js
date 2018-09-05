const data = require("../data/rawdata");
const makeList = require("../utils/makelist");
require("console.table");

module.exports = (args) => {
  try {
    const app = args.app || args.a;
    const list = args.list || args.l;
    const json = args.json || args.j;

    let result = data;

    if (app) {
      let appName = app.toLowerCase();
      let idx = data.findIndex(x => x.appName === appName);

      if (idx >= 0) {
        appName = data[idx].displayName || app;
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
        console.log(`\n${app} is not in the database.`);
        makeList(data, "appName", "apps");
      }
    } else if (list) {
      makeList(data, "appName", "apps");
    } else if (json) {
      console.log(`\n${JSON.stringify(result, null, 2)}\n`);
    } else {
      makeList(data, "appName", "apps");
    }

  } catch (err) {
    console.error(err)
  }
}