const display = (list) => {
  console.log(list.join("\n"));
};

const readNextMove = () => {
  process.stdin.setEncoding('utf-8');
  const playerInput = process.stdin.read();
  if (playerInput) {
    return playerInput[0];
  }
};

exports.display = display;
exports.readNextMove = readNextMove;