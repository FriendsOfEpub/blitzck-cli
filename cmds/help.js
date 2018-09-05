const menus = {
  main: `
    blitzck [command] <options>

    support ............ show support for the Reading System
        --help, -h .......... show help specific to the support command
        --json, -j .......... show a raw JSON output
        --list, -l .......... show the list of Reading Systems available in the database
        --search, -s ........ search a specific Reading System
    ns ................. show namespaces
        --all, -a ........... show all namespaces
        --help, -h .......... show help specific to the ns command
        --list, -l .......... show the list of namespaces available in the database
        --search, -s ........ search a specific namespace
    version ............ show the version
    help ............... show help menu\n`,

  support: `
    blitzck support <options>

    --help, -h ......... show help specific to the support command
    --json, -j ......... show a raw JSON output
    --list, -l ......... show the list of Reading Systems available in the database
    --search, -s ....... search a specific Reading System\n`,

  ns: `
    blitzck ns <options>

    --all, -a .......... show all namespaces
    --help, -h ......... show help specific to the ns command
    --list, -l ......... show the list of namespaces available in the database
    --search, -s ....... search a specific namespace
  `
}

module.exports = (args) => {
  const subCmd = args._[0] === "help"
    ? args._[1]
    : args._[0]

  console.log(menus[subCmd] || menus.main)
}