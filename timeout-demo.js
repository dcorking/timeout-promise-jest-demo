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
//
// ```
// $ node timeout-demo.js
// 2018-07-17T14:48:49.006Z starting timer for 1000 milliseconds
// 2018-07-17T14:48:50.015Z timer complete
// demo complete
// ```
//
// ```
// $ jest
//  PASS  __tests__/timeout-demo.js
//   ✓ Timeout promise demo (4ms)

//   console.log timeout-demo.js:7
//     2018-07-17T14:46:11.241Z starting timer for 1000 milliseconds

//   console.log timeout-demo.js:13
//     2018-07-17T14:46:11.243Z timer complete

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        1.432s
// Ran all test suites.
// $ jest --version
// v22.1.4
// $ node --version
// v8.10.0
// ```
