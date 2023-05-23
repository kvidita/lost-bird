class Bird {
  #x;
  #y;
  #icon;

  constructor(icon, xCordinate, yCordinate) {
    this.#x = xCordinate;
    this.#y = yCordinate;
    this.#icon = icon;
  };

  flyUp() {
    this.#x -= 1;
  };

  flyDown() {
    this.#x += 1;
  };

  flyForward() {
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
};

exports.Bird = Bird;