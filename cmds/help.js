const menus = {
  main: `
    blitzck [command] <options>

    cmt ................ show core media types
        --all, -a ........... show all core media types
        --help, -h .......... show help specific to the ns command
        --list, -l .......... show the list of core media types available in the database
        --search, -s ........ search a specific core media type
    help ............... show help menu
    ns ................. show namespaces
        --all, -a ........... show all namespaces
        --help, -h .......... show help specific to the ns command
        --list, -l .......... show the list of namespaces available in the database
        --search, -s ........ search a specific namespace
    support ............ show support for the Reading System
        --help, -h .......... show help specific to the support command
        --json, -j .......... show a raw JSON output
        --list, -l .......... show the list of Reading Systems available in the database
        --search, -s ........ search a specific Reading System
    version ............ show the version\n`,

  cmt: `
    blitzck cmt <options>

    --all, -a .......... show all core media types
    --help, -h ......... show help specific to the ns command
    --list, -l ......... show the list of core media types available in the database
    --search, -s ....... search a specific core media type\n`,

  ns: `
    blitzck ns <options>

    --all, -a .......... show all namespaces
    --help, -h ......... show help specific to the ns command
    --list, -l ......... show the list of namespaces available in the database
    --search, -s ....... search a specific namespace\n`,

  support: `
    blitzck support <options>

    --help, -h ......... show help specific to the support command
    --json, -j ......... show a raw JSON output
    --list, -l ......... show the list of Reading Systems available in the database
    --search, -s ....... search a specific Reading System\n`
}

module.exports = (args) => {
  const subCmd = args._[0] === "help"
    ? args._[1]
    : args._[0]

  console.log(menus[subCmd] || menus.main)
}