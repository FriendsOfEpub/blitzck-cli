# blitzck-cli

A tool that gives you EPUB Reading Systems’ support, mimetypes, namespaces, and ARIA mappings from the command line interface

## Important Note

We’re in the process of sunsetting the entire Blitz Project, which means this repository will reach End of Life and be archived as read-only on July 1, 2020. Don’t worry, all current and future forks will continue to work after this date.

If you are interested in the sunsetting roadmap, or taking over this repository’s maintenance and development, please [check the related meta issue in Blitz](https://github.com/FriendsOfEpub/Blitz/issues/66).

## Install

Clone the repo then run `npm install -g` from the root of the directory.

If for some reason the `blitzck` command doesn’t work after a global install, run `npm link` from the root of the directory.

## Usage

From anywhere, you can now run the `blitzck` command.

### Check Support

To see the list of apps in the database:

```
blitzck support --list
```

Then to check a specific app e.g. iBooks:

```
blitzck support --search ibooks
```

This will output a compat table for each platform documented.

You can also output to a file, for instance: 

```
blitzck support --json > epub-support.json
```

Will create an `epub-support.json` file and write the database as JSON inside it.

And:

```
blitzck map --xml > aria-mappings.xml
```

Will create an `aria-mappings.xml` file and write the database as XML inside it.

Finally:

```
blitzck ns --yaml > namespaces.yaml
```

Will create an `namespaces.yaml` file and write the database as YAML inside it.

### Check Namespaces

```
blitzck ns --search epub
```

### Check Media Types

```
blitzck mt --search otf
```

### Check ARIA Mapping for epub:types

```
blitzck map --search copyright-page
```

## Acknowledgements

Special thanks to [Jellybooks](https://www.jellybooks.com) for providing the data this tool is using.

![Jellybooks Logo](https://www.jellybooks.com/assets/jellybooks-logo-black-d440ea9bc8e5bb27335cdde49f495e263f37cfcffa317b6407a58d96bc799e19.png)

Jellybooks require EPUB 3, JavaScript and Web Storage for an app to be supported. This tool was originally developed as a quick way to check if those features were supported by a reading app. If you think an app fulfills these criteria but [is not officially supported by Jellybooks](https://www.jellybooks.com/about/reader_analytics/supported_reading_apps), then please let them know.

## Help

```
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
    version ............ show the version
```

## Support Features

- Name: the `navigator.epubReadingSystem.name`.
- Version: the `navigator.epubReadingSystem.version`.
- EPUB 3: if not supported, it means EPUB 2.0.1 probably is the highest version that is.
- CSS 2.1: per spec, what EPUB 3.0.1 should support.
- CSS 3: per spec, what EPUB 3.2 should support.
- JavaScript: if not supported but EPUB 3 is, then it is probably disabled.
- Web Storage: `sessionStorage` and `localStorage` are supported/enabled.
- Origin: how EPUB contents are served – can impact Web Storage (shared vs. isolated) and rectrict some JavaScript APIs.
- Engine: our best guess at which WebView or Rendering Engine is used by the app.

## License

MIT © 2018 Jiminy Panoz. [See complete license](LICENSE).