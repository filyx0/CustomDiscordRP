const minimist = require("minimist");
const configfile = require("./config.json");

const version = "1.0.2";

let args = minimist(process.argv.slice(2), {
  string: ["id", "state", "details", "largeimg", "smallimg", "largetxt", "smalltxt"],
  alias: {
    ID: configfile.config.ID,
    STATE: configfile.config.STATE,
    DETAILS: configfile.config.DETAILS,
    LARGEIMG: configfile.config.LARGE_IMG,
    SMALLIMG: configfile.config.SMALL_IMG,
    LARGETXT: configfile.config.LARGE_TEXT,
    SMALLTXT: configfile.config.SMALL_TEXT
  },
  default: {
    id: configfile.config.ID,
    state: configfile.config.STATE,
    details: configfile.config.DETAILS,
    largeimg: configfile.config.LARGE_IMG,
    smallimg: configfile.config.SMALL_IMG,
    largetxt: configfile.config.LARGE_TEXT,
    smalltxt: configfile.config.SMALL_TEXT
  }
});

console.log((configfile.configargs.TIMESTAMP).toLowerCase().toString())

if((configfile.configargs.TIMESTAMP).toLowerCase().toString() != "true" && (configfile.configargs.TIMESTAMP).toLowerCase().toString() != "false"){
  console.log("ERROR: 'TIMESTAMP' is not a Boolean String! (true, false)")
  return;
}

console.log(args);
console.log("Press CTRL+C to exit. Close the CMD to exit!");

const client = require("discord-rich-presence")(args.id);

if((configfile.configargs.TIMESTAMP).toLowerCase().toString() == "true"){
  client.updatePresence({
    //state: args.state,
    details: args.details,
    startTimestamp: Math.floor(Date.now() / 1000),
    //endTimestamp: Math.floor(Date.now() / 1000) + 60 * 5,
    largeImageKey: args.largeimg,
    largeImageText: args.largetxt,
    smallImageKey: args.smallimg,
    smallImageText: args.smalltxt,
    instance: true
  });
}

if((configfile.configargs.TIMESTAMP).toLowerCase().toString() == "false"){
  client.updatePresence({
    //state: args.state,
    details: args.details,
    //startTimestamp: Math.floor(Date.now() / 1000),
    //endTimestamp: Math.floor(Date.now() / 1000) + 60 * 5,
    largeImageKey: args.largeimg,
    largeImageText: args.largetxt,
    smallImageKey: args.smallimg,
    smallImageText: args.smalltxt,
    instance: true
  });
}