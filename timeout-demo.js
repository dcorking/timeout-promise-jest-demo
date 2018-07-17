"use strict";

const util = require("util");
const setTimeoutPromise = util.promisify(setTimeout);
const delay = 1000;

const timeoutDemo = async () => {
  console.log(
    `${new Date().toISOString()} starting timer for ${delay} milliseconds`
  );
  await setTimeoutPromise(delay);
  console.log(`${new Date().toISOString()} timer complete`);
};

module.exports = {
  timeoutDemo
};

// to run standalone:
// timeoutDemo().then(e => console.log(e), r => console.log(r));
