class Bird {
  #coordinate
  #icon;

  constructor(icon, birdCordinate) {
    this.#coordinate = birdCordinate;
    this.#icon = icon;
  };

  flyUp() {
    this.#coordinate.x -= 1;
  };

  flyDown() {
    this.#coordinate.x += 1;
  };

  flyForward() {
    this.#coordinate.y -= 1;
  };

  get x() {
    return this.#coordinate.x;
  };

  get y() {
    return this.#coordinate.y;
  };

  get icon() {
    return this.#icon;
  };
};

exports.Bird = Bird;