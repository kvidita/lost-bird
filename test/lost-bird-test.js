const stdinput = setInterval(() => {
  process.stdin.setEncoding("utf-8");
  const input = process.stdin.read();
  if (input) {
    if (input.trim() === ".exit") {
      clearInterval(stdinput);
    }
    console.log(input);
  }
}, 500);

const writeStdout = () => {
  const num = 1;
  process.stdout.write(num.toString());
};

writeStdout();
