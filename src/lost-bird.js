const { chunk } = require("../lib/array.js");
const { Bird } = require("./bird.js");
const { display } = require("./interface.js");

const navigate = (space, 
  bird, 
  flyIntervalID, 
  obstacleCoordinate, 
  nestCoordinate, 
  currentMove) => {
  const previousX = bird.x;
  const previousY = bird.y;

  if (bird.y === nestCoordinate.y) {
    if (bird.x === nestCoordinate.x) {
      console.log('🤘Hurray...!!! Bird reached its nest');
    } else {
      console.log('🙁 Ohh no...!!! Bird lost');
    }
    clearInterval(flyIntervalID);
    stopStdinStream();
    return;
  }

  const birdCoordinate = { y: bird.y, x: bird.x };
  bird.flyForward();
  console.log(currentMove);
  space[previousX][previousY] = " ";

  if (currentMove === 'w' && bird.x > 0) {
    bird.flyUp();
  }

  if (currentMove === 's' && bird.x < 4) {
    bird.flyDown();
  }
  console.clear();

  if (birdCoordinate.x === obstacleCoordinate.x && birdCoordinate.y === obstacleCoordinate.y) {
    process.stdout.write("you hit an obstacle");
    space[previousX][previousY] = "💥";
    display(space);
    clearInterval(flyIntervalID);
    stopStdinStream();
    return;
  }

  space[previousX][previousY] = " ";
  space[bird.x][bird.y] = bird.icon;

  display(space);
};

const runLostBird = function () {
  const grid = new Array(100).fill(" ");
  const space = chunk(grid, 20);

  const birdCoordinate = { x: 2, y: 19 };
  const bird = new Bird("🕊", birdCoordinate);

  const nest = "🪺";
  space[2][0] = nest;
  const nestCoordinate = { y: 0, x: 2 };

  const obstacle = "💣";
  space[1][4] = obstacle;
  const obstacleCoordinate = { y: 4, x: 1 };

  const isEOI = (key) => key === 'q';
  const onEnd = () => clearInterval(flyIntervalID);
  const onData = (keyPressed) => navigate(
    space,
    bird,
    flyIntervalID,
    obstacleCoordinate,
    nestCoordinate,
    keyPressed
  );

  watchStdin(onData, isEOI, onEnd);

  const flyIntervalID = setInterval(() => {
    navigate(space, bird, flyIntervalID, obstacleCoordinate, nestCoordinate);
  }, 1000);
};

const stopStdinStream = () => {
  process.stdin.setRawMode(false);
  process.stdin.pause();
};

const startStdinStream = () => {
  process.stdin.setEncoding('utf-8');
  process.stdin.setRawMode(true);
};

const watchStdin = (onData, isEOI, onEnd) => {
  startStdinStream();

  process.stdin.on('data', (keyPressed) => {
    if (isEOI(keyPressed)) {
      stopStdinStream();
      onEnd();
      return;
    }
    onData(keyPressed);
  });
}

exports.runLostBird = runLostBird;