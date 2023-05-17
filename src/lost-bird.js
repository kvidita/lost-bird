const fs = require("fs");
const { chunk } = require("../lib/array.js");

class creature {
  #x;
  #y;
  #icon;

  constructor(icon, xCordinate, yCordinate) {
    this.#x = xCordinate;
    this.#y = yCordinate;
    this.#icon = "🕊";
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
  const bird = new creature();
  space[2][0] = nest;
  space[2][space[2].length - 1] = bird.icon;
  display(space);
};

const display = (list) => {
  console.log(list.join("\n"));
};

const playersMove = () => {
  console.log(fs.readFileSync("./resource/players-input.txt", "utf-8"));
};

const moveBird = () => {};

lostBird();
const manjeet = new creature(1, 2);
console.log(manjeet.xDown(), manjeet.x);

playersMove();
