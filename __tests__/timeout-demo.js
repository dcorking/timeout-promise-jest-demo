"use strict";

const helpers = jest.mock("../helpers");
const timeoutDemo = require("../timeout-demo").timeoutDemo;

test("Timeout promise demo", async () => {
  helpers.setTimeoutPromise = jest.fn().mockImplementation(delay => {
    console.log(`Fake timeout set for ${delay} ms`);
  });
  timeoutDemo();
});
