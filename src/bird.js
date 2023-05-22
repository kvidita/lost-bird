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

  };

  flyUp() {
    this.#x -= 1;
  };

  flyDown() {
    this.#x += 1;
  };

  flyForward() {
    this.#prevX = this.#x;
    this.#prevY = this.#y;
    this.#y -= 1;
  };

  get x() {
    return this.#x;
  };

  get y() {
    return this.#y;
  };

  get icon() {
    return this.#icon;
  };

  get previousX() {
    return this.#prevX;
  };

  get previousY() {
    return this.#prevY;
  };

  move(direction) {
    this.#prevX = this.#x;
    this.#prevY = this.#y;
    this.flyForward();
    if (direction === "w") {
      this.flyUp();
    }
    if (direction === "s") {
      this.flyDown();
    }
  }
};

exports.Bird = Bird;