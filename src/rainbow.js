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
    return ` `; // if space, do not give a color
  } else {
    return `${format.rainbow[index % format.rainbow.length]}${input}${format.reset}`; // starts formatting with color that corresponds to char position in string, and then stops formatting after the char
  }
}

function colorString(input) {
  const string = `${input}`; // forces input type to string via template literal
  const characters = string.split(""); // creates array of each character in string
  const coloredString = characters.map(colorCharacter).join(""); // color each character and then join into one string

  return coloredString;
}

function outputRainbow(input) {
    console.log(colorString(input));
}

module.exports = function(input) {
  outputRainbow(input);
}