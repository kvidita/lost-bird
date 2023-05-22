const { chunk } = require("../lib/array.js");
const { Bird } = require("./bird.js");
const { display, readNextMove } = require("./interface.js");

const navigate = (space, bird) => {
  console.clear();
  space[bird.previousX][bird.previousY] = " ";
  space[bird.x][bird.y] = bird.icon;

  display(space);

  console.log(bird.y);
  bird.flyForward();
  const currentMove = readNextMove();

  if (currentMove) {
    bird.move(currentMove);
  }
}

const runLostBird = function() {
  const grid = new Array(100).fill(" ");
  const space = chunk(grid, 20);
  const bird = new Bird("🕊", 2, 19);
  const nest = "🪺";
  space[2][0] = nest;

  setInterval(() => { navigate(space, bird) }, 1000);
};

exports.runLostBird = runLostBird;
