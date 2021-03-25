const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Not an array");
  }

  return arr
    .map((el, i, array) => (array[i - 1] == "--discard-next" ? null : el))

    .map((el, i, array) =>
      el == "--double-next" && array[i + 1] != null ? array[i + 1] : el
    )
    .map((el, i, array) =>
      el == "--double-prev" && array[i - 1] != null ? array[i - 1] : el
    )
    .map((el, i, array) => (array[i + 1] == "--discard-prev" ? null : el))

    .filter(
      (el) =>
        el != "--double-next" &&
        el != "--double-prev" &&
        el != "--discard-next" &&
        el != "--discard-prev" &&
        el != null
    );
};
