"use strict";

const util = require("util");
const setTimeoutPromise = util.promisify(setTimeout);

module.exports = { setTimeoutPromise };
