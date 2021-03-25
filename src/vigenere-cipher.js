const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  direct = true;
  constructor(direct) {
    if (typeof direct == "undefined") {
      this.direct = true;
    } else {
      this.direct = direct;
    }
  }

  encrypt(message, key) {
    let initialMessage = message.toUpperCase();

    let initialKey = key.toUpperCase();
    let messageLength = message.length;
    let keyLength = key.length;
    let keywordArray = [];
    let j = 0;
    for (let i = 0; i < messageLength; i++) {
      if (
        initialMessage.charCodeAt(i) > 90 ||
        initialMessage.charCodeAt(i) < 65
      ) {
        keywordArray.push(initialMessage[i]);
      } else {
        keywordArray.push(
          initialKey.charCodeAt(j >= keyLength ? j % keyLength : j) - 65
        );
        j++;
      }
    }

    let messageAscii = initialMessage
      .split("")
      .map((el) =>
        el.charCodeAt(0) >= 65 && el.charCodeAt(0) <= 90
          ? el.charCodeAt(0) - 65
          : el
      );

    let encrytpedWord = [];
    for (let i = 0; i < messageAscii.length; i++) {
      if (Number.isInteger(messageAscii[i])) {
        let numb = messageAscii[i] + keywordArray[i];
        if (numb >= 26) {
          numb = numb % 26;
        }
        encrytpedWord.push(numb);
      } else {
        encrytpedWord.push(messageAscii[i]);
      }
    }
    let readyString = encrytpedWord
      .map((el) => (Number.isInteger(el) ? String.fromCharCode(el + 65) : el))
      .join("");

    return this.direct ? readyString : readyString.split("").reverse().join("");
  }
  decrypt(encryptedMessage, key) {
    let initialMessage = encryptedMessage.toUpperCase();
    let initialKey = key.toUpperCase();
    let messageLength = encryptedMessage.length;
    let keyLength = key.length;
    let keywordArray = [];
    let j = 0;
    for (let i = 0; i < messageLength; i++) {
      if (
        initialMessage.charCodeAt(i) > 90 ||
        initialMessage.charCodeAt(i) < 65
      ) {
        keywordArray.push(initialMessage[i]);
      } else {
        keywordArray.push(
          initialKey.charCodeAt(j >= keyLength ? j % keyLength : j) - 65
        );
        j++;
      }
    }

    let messageAscii = initialMessage
      .split("")
      .map((el) =>
        el.charCodeAt(0) >= 65 && el.charCodeAt(0) <= 90
          ? el.charCodeAt(0) - 65
          : el
      );

    let encrytpedWord = [];
    for (let i = 0; i < messageAscii.length; i++) {
      if (Number.isInteger(messageAscii[i])) {
        let numb = messageAscii[i] - keywordArray[i];
        if (numb < 0) {
          numb = numb + 26;
        }
        encrytpedWord.push(numb);
      } else {
        encrytpedWord.push(messageAscii[i]);
      }
    }
    let readyString = encrytpedWord
      .map((el) => (Number.isInteger(el) ? String.fromCharCode(el + 65) : el))
      .join("");

    return this.direct ? readyString : readyString.split("").reverse().join("");
  }
}

module.exports = VigenereCipheringMachine;
