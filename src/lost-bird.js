const { chunk } = require("../lib/array.js");
const { Bird } = require("./bird.js");
const { display, readNextMove } = require("./interface.js");

const navigate = (space, bird, flyBird) => {
  const previousX = bird.x;
  const previousY = bird.y;

  if (bird.y === 0) {
    if (bird.x === 2) {
      console.log('🤘Hurray...!!! Bird reached its nest');
    } else {
      console.log('🙁 Ohh no...!!! Bird lost');
    }
    clearInterval(flyBird);
    return;
  }

  bird.flyForward();
  const currentMove = readNextMove();
  space[previousX][previousY] = " ";

  if (currentMove === 'w' && bird.x > 0) {
    bird.flyUp();
  }

  if (currentMove === 's' && bird.x < 4) {
    bird.flyDown();
  }

  console.clear();
  space[previousX][previousY] = " ";
  space[bird.x][bird.y] = bird.icon;

  display(space);
};

const runLostBird = function() {
  const grid = new Array(100).fill(" ");
  const space = chunk(grid, 20);
  const birdCoordinate = { x: 2, y: 19 };
  const bird = new Bird("🕊", birdCoordinate);
  const nest = "🪺";
  space[2][0] = nest;

  const flyBird = setInterval(() => {
    navigate(space, bird, flyBird);
  }, 1000);
};

exports.runLostBird = runLostBird;
