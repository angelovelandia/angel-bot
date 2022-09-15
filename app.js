require("./config/print").startedConsole()
require("./src/connectWa").startedConnect()

const log = require('log-beautify');
global.log = log;