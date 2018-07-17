"use strict";

const timeoutDemo = async () => {
  console.log("Hello world");
};

module.exports = {
  timeoutDemo
};

// to run standalone:
// timeoutDemo().then(e => console.log(e), r => console.log(r));
