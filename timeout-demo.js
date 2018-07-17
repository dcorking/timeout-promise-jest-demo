"use strict";

const helpers = require("./helpers");
const delay = 1000;

const timeoutDemo = async () => {
  console.log(
    `${new Date().toISOString()} starting timer for ${delay} milliseconds`
  );

  await helpers.setTimeoutPromise(delay);

  console.log(`${new Date().toISOString()} timer complete`);

  return "demo complete";
};

module.exports = {
  timeoutDemo
};

// to run standalone:
// timeoutDemo().then(e => console.log(e), r => console.log(r));
