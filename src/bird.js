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
    this.#prevX = this.#x;
    this.#prevY = this.#y;
    this.#x -= 1;
  };

  flyDown() {
    this.#prevX = this.#x;
    this.#prevY = this.#y;
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
};

exports.Bird = Bird;