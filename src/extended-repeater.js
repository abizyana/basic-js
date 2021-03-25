const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let repeatTimes = options.repeatTimes ? options.repeatTimes : 1;
  let separator = options.separator ? options.separator : "+";
  let addition =
    typeof options.addition != "undefined" ? "" + options.addition : "";
  let additionRepeatTimes = options.additionRepeatTimes
    ? options.additionRepeatTimes
    : 1;
  let additionSeparator = options.additionSeparator
    ? options.additionSeparator
    : "|";

  let string =
    "" +
    str +
    Array(additionRepeatTimes).fill(addition).join(additionSeparator);
  return Array(repeatTimes).fill(string).join(separator);
};
