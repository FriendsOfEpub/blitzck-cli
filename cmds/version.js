const { version } = require("../package.json");
const logo = `hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
hhhhhhhhhhhhhhhhhhhhhhhhyhhhhhhhhhhhhhhh
hhhhhhhhhhhhhhhhhhhhhhh/+hhhhhhhhhhhhhhh
hhhhhhhhhhhhhhhhhhhhhs. yhhhhhhhhhhhhhhh
hhhhhhhhhhhhhhhhhhhh/  .hhhhhhhhhhhhhhhh
hhhhhhhhhhhhhhhhhhs.   /hhhhhhhhhhhhhhhh
hhhhhhhhhhhhhhhhh/     shhhhhhhhhhhhhhhh
hhhhhhhhhhhhhhhs.     .hhhhhhhhhhhhhhhhh
hhhhhhhhhhhhhh/       :ssssssyhhhhhhhhhh
hhhhhhhhhhhhs.              +hhhhhhhhhhh
hhhhhhhhhhh/              .shhhhhhhhhhhh
hhhhhhhhhhyssssss:       +hhhhhhhhhhhhhh
hhhhhhhhhhhhhhhhh.     .shhhhhhhhhhhhhhh
hhhhhhhhhhhhhhhhs     +hhhhhhhhhhhhhhhhh
hhhhhhhhhhhhhhhh/   .shhhhhhhhhhhhhhhhhh
hhhhhhhhhhhhhhhh.  +hhhhhhhhhhhhhhhhhhhh
hhhhhhhhhhhhhhhs .shhhhhhhhhhhhhhhhhhhhh
hhhhhhhhhhhhhhh++hhhhhhhhhhhhhhhhhhhhhhh
hhhhhhhhhhhhhhhyhhhhhhhhhhhhhhhhhhhhhhhh
hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh`;

module.exports = () => {
  console.log(`\n${logo} \n\nblitzck-cli v${version}\n`)
}