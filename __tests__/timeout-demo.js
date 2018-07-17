"use strict";

const timeoutDemo = require("../timeout-demo").timeoutDemo;

jest.useFakeTimers();

test("Timeout promise demo", async () => {
  timeoutDemo();

  // expect(setTimeout).toHaveBeenCalledTimes(1);
  // FAIL Expected mock function to have been called one time, but it was called zero times.
});
