const menus = {
  main: `
    blitzck [command] <options>

    support ............ show support for the Reading System
        --app, -a ........... show the app
        --help, -h .......... show help specific to the support command
        --json, -j .......... show a raw JSON output
        --list, -l .......... show the list of Reading Systems available in the database
    ns ................. show namespaces
        --help, -h .......... show help specific to the ns command
        --list, -l .......... show the list of namespaces available in the database
        --search, -s ........ search a specific namespace
    version ............ show the version
    help ............... show help menu\n`,

  support: `
    blitzck support <options>

    --app, -a .......... show the app
    --help, -h ......... show help specific to the support command
    --json, -j ......... show a raw JSON output
    --list, -l ......... show the list of Reading Systems available in the database\n`,

  ns: `
    blitzck ns <options>

    --help, -h ......... show help specific to the ns command
    --list, -l .......... show the list of namespaces available in the database
    --search, -s ........ search a specific namespace
  `
}

module.exports = (args) => {
  const subCmd = args._[0] === "help"
    ? args._[1]
    : args._[0]

  console.log(menus[subCmd] || menus.main)
}