class Bird {
  #x;
  #y;
  #icon;
  #prevX;
  #prevY;

  constructor(icon, xCordinate, yCordinate) {
    this.#x = xCordinate;
    this.#y = yCordinate;
    this.#icon = icon;
    this.#prevX = this.#x;
    this.#prevY = this.#y;

  }

  xUp() {
    this.#x -= 1;
  }

  xDown() {
    this.#x += 1;
  }

  decrementY() {
    this.#prevX = this.#x;
    this.#prevY = this.#y;
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

  get previousX() {
    return this.#prevX;
  }

  get previousY() {
    return this.#prevY;
  }

  move(direction) {
    this.#prevX = this.#x;
    this.#prevY = this.#y;
    this.decrementY();
    if (direction === "w") {
      this.xUp();
    }
    if (direction === "s") {
      this.xDown();
    }
  }
};

exports.Bird = Bird;