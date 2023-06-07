const { runLostBird } = require("./src/lost-bird.js");
const { strictEqual } = require('node:test');

const main = () => {
  runLostBird();
};

main();