const menus = {
  main: `
    blitzck [command] <options>

    help ............... show help menu
    map ................ show aria mappings for epub:types
        --all, -a ........... show all epub:types and their mapping
        --help, -h .......... show help specific to the map command
        --json, -j .......... show a raw JSON output
        --xml, -x ........... show a raw XML output
        --yaml, -y .......... show a raw YAML output
        --list, -l .......... show the list of epub:types available in the database
        --search, -s ........ search a specific epub:type
    mt ................. show media types
        --all, -a ........... show all media types
        --help, -h .......... show help specific to the mt command
        --json, -j .......... show a raw JSON output
        --xml, -x ........... show a raw XML output
        --yaml, -y .......... show a raw YAML output
        --list, -l .......... show the list of media types available in the database
        --search, -s ........ search a specific media type
    ns ................. show namespaces
        --all, -a ........... show all namespaces
        --help, -h .......... show help specific to the ns command
        --json, -j .......... show a raw JSON output
        --xml, -x ........... show a raw XML output
        --yaml, -y .......... show a raw YAML output
        --list, -l .......... show the list of namespaces available in the database
        --search, -s ........ search a specific namespace
    support ............ show support for the Reading System
        --help, -h .......... show help specific to the support command
        --json, -j .......... show a raw JSON output
        --xml, -x ........... show a raw XML output
        --yaml, -y .......... show a raw YAML output
        --list, -l .......... show the list of Reading Systems available in the database
        --search, -s ........ search a specific Reading System
    version ............ show the version\n`,

  map: `
    blitzck map <options>

    --all, -a .......... show all epub:types and their mapping
    --help, -h ......... show help specific to the map command
    --json, -j ......... show a raw JSON output
    --xml, -x .......... show a raw XML output
    --yaml, -y ......... show a raw YAML output
    --list, -l ......... show the list of epub:types available in the database
    --search, -s ....... search a specific epub:type\n`,

  mt: `
    blitzck mt <options>

    --all, -a .......... show all media types
    --help, -h ......... show help specific to the mt command
    --json, -j ......... show a raw JSON output
    --xml, -x .......... show a raw XML output
    --yaml, -y ......... show a raw YAML output
    --list, -l ......... show the list of media types available in the database
    --search, -s ....... search a specific media type\n`,

  ns: `
    blitzck ns <options>

    --all, -a .......... show all namespaces
    --help, -h ......... show help specific to the ns command
    --json, -j ......... show a raw JSON output
    --xml, -x .......... show a raw XML output
    --yaml, -y ......... show a raw YAML output
    --list, -l ......... show the list of namespaces available in the database
    --search, -s ....... search a specific namespace\n`,

  support: `
    blitzck support <options>

    --help, -h ......... show help specific to the support command
    --json, -j ......... show a raw JSON output
    --xml, -x .......... show a raw XML output
    --yaml, -y ......... show a raw YAML output
    --list, -l ......... show the list of Reading Systems available in the database
    --search, -s ....... search a specific Reading System\n`
}

module.exports = (args) => {
  const subCmd = args._[0] === "help"
    ? args._[1]
    : args._[0]

  console.log(menus[subCmd] || menus.main)
}