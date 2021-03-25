const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turnsNumber = 2 ** disksNumber - 1;
  let seconds = Math.floor((turnsNumber / turnsSpeed) * 3600);

  return { turns: turnsNumber, seconds: seconds };
};
