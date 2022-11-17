const minimist = require("minimist");
const configfile = require("./config.json");

const version = "1.0.1";

let args = minimist(process.argv.slice(2), {
  string: ["id", "state", "details", "large", "small", "largetext", "smalltext"],
  alias: {
    i: configfile.config.ID,
    D: configfile.config.STATE,
    d: configfile.config.DETAILS,
    L: configfile.config.LARGE_IMG,
    S: configfile.config.SMALL_IMG,
    l: configfile.config.LARGE_TEXT,
    s: configfile.config.SMALL_TEXT
  },
  default: {
    id: configfile.default.ID,
    large: configfile.default.LARGE_IMG,
  }
});

console.log(args);
console.log("Press CTRL+C to exit. Close the CMD to exit!");

const client = require("discord-rich-presence")(args.id);

client.updatePresence({
  state: args.state,
  details: args.details,
  startTimestamp: Math.floor(Date.now() / 1000),
  // endTimestamp: Math.floor(Date.now() / 1000) + 60 * 5,
  largeImageKey: args.large,
  largeImageText: args.largetext,
  smallImageKey: args.small,
  smallImageText: args.smalltext,
  instance: true
});