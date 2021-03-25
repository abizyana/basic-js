const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }

  return members
    .filter((el) => typeof el == "string")
    .map((el) => el.trim().split("")[0].toUpperCase())
    .sort()
    .join("");
};
