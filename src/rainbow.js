let format = {
  rainbow: [
    "\x1b[31m", //red
    "\x1b[33m", //yellow
    "\x1b[32m", //green
    "\x1b[36m", //cyan
    "\x1b[34m", //blue
    "\x1b[35m" //magenta
  ],
  reset: "\x1b[0m"
}

function colorCharacter(input, index) {
  if (input === " ") {
    return ` `;
  } else {
    return `${format.rainbow[index % format.rainbow.length]}${input}${format.reset}`;
  }
}

function colorString(input) {
  const characters = input.split("");
  const coloredString = characters.map(colorCharacter).join("");

  return coloredString;
}

function outputRainbow(input) {
  if (typeof input !== "string") {
    console.log(colorString('ERROR: Input was not a string!'));
  } else {
    console.log(colorString(input));
  }
}

module.exports = outputRainbow(input);