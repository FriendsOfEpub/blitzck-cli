const data = require("../data/rawdata");
require("console.table");

module.exports = (args) => {
  try {
    const app = args.app || args.a;
    const list = args.list || args.l;
    const json = args.json || args.j;

    let result = data;

    const makeList = () => {
      let listing = ``;
      for (i in result) {
        listing += `- ${result[i].appName}\n`;
      }
      console.log(`\nHere is the list of apps in the database:\n${listing}`);
    };

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
          for (os in result) {
            console.table(`\nOn ${os}:`, result[os]);
          }
        }
      } else {
        console.log(`\n${app} is not in the database.`);
        makeList();
      }
    } else if (list) {
      makeList();
    } else if (json) {
      console.log(`\n${JSON.stringify(result, null, 2)}\n`);
    } else {
      makeList();
    }

  } catch (err) {
    console.error(err)
  }
}