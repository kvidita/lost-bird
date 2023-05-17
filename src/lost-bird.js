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

  decrementY() {
    this.#y -= 1;
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

  move(direction) {
    this.decrementY();
    if (direction === "w") {
      this.xUp();
    }
    if (direction === "s") {
      this.xDown();
    }
  }
}

// const initializeGame = () => {};

const lostBird = function () {
  const grid = new Array(100).fill(" ");
  const space = chunk(grid, 20);
  const bird = new creature("🕊", 2, 19);

  const nest = "🪺";
  space[2][0] = nest;

  setInterval(() => {
    console.clear();
    space[bird.x][bird.y] = bird.icon;
    display(space);
    console.log(bird.y);
    const currentMove = readNextMove();
    bird.move(currentMove);
  }, 3000);
};

const display = (list) => {
  console.log(list.join("\n"));
};

const readNextMove = () => {
  const fileContent = fs.readFileSync("./resource/players-input.txt", "utf-8");
  const [currentMove] = fileContent.split("\n").slice(-1);
  return currentMove;
};

const moveBird = () => {};

lostBird();