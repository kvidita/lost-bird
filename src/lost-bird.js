const fs = require("fs");
const { chunk } = require("../lib/array.js");

class creature {
  #x;
  #y;
  #icon;

  constructor(icon, xCordinate, yCordinate) {
    this.#x = xCordinate;
    this.#y = yCordinate;
    this.#icon = icon;
  }

  xUp() {
    this.#x -= 1;
  }

  xDown() {
    this.#x += 1;
  }

  get x() {
    return this.#x;
  }

  get y() {
    return this.#y;
  }

  get icon() {
    return this.#icon;
  }
}

const lostBird = function () {
  const grid = new Array(100).fill(" ");
  const space = chunk(grid, 20);
  const nest = "🪺";
  const bird = new creature("🕊", 2, 19);
  space[2][0] = nest;

  readNextMove();
  console.log(bird.x, bird.y);
  space[bird.x][bird.y] = bird.icon;
  display(space);
};

const display = (list) => {
  console.log(list.join("\n"));
};

const readNextMove = () => {
  console.log(fs.readFileSync("./resource/players-input.txt", "utf-8"));
};

const moveBird = () => {};

lostBird();

// playersMove();
