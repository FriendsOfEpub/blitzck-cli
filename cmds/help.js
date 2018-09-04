const menus = {
  main: `
    blitzck [command] <options>

    support ............ show support for the Reading System
        --app, -a ........... show the app
        --help, -h .......... show help specific to the support command
        --json, -j .......... show a raw JSON output
        --list, -l .......... show the list of Reading Systems available in the database
    version ............ show the version
    help ............... show help menu\n`,

  support: `
    blitzck support <options>

    --app, -a .......... show the app
    --help, -h ......... show help specific to the support command
    --json, -j ......... show a raw JSON output
    --list, -l ......... show the list of Reading Systems available in the database\n`,
}

module.exports = (args) => {
  const subCmd = args._[0] === "help"
    ? args._[1]
    : args._[0]

  console.log(menus[subCmd] || menus.main)
}