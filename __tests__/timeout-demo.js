const timeoutDemo = require("../timeout-demo").timeoutDemo;

describe("Timeout promise demo", () => {
  test("completes", async () => {
    await timeoutDemo();
  });
});
