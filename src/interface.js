const display = (list) => {
  console.log('\n\n\n');
  const gameSpace = list.join("\n\t\t\t\t").replaceAll(",", ".");
  console.log(`\t\t\t\t${gameSpace}`);
};

exports.display = display;