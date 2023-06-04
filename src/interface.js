const display = (list) => {
  console.log('\n\n\n');
  const gameSpace = list.join("\n\t\t\t\t").replaceAll(",", ".");
  console.log(`\t\t\t\t${gameSpace}`);
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