const adjective = require("./adjective");
const animal = require("./animal");

// options
// mode - default (형용사+이름), onlyAdjective(형용사), onlyName(이름만)
const generateNickname = (options = { mode: "default" }) => {
  let result;

  if (options.mode === "default") {
    const adjectiveWord = adjective[getRandomNumber(adjective.length)];
    const animalWord = animal[getRandomNumber(animal.length)];
    result = `${adjectiveWord} ${animalWord}`;
  } else if (options.mode === "onlyAdjective") {
    const adjectiveWord = adjective[getRandomNumber(adjective.length)];
    result = adjectiveWord;
  } else if (options.mode === "onlyName") {
    const animalWord = animal[getRandomNumber(animal.length)];
    result = animalWord;
  }
  return result;
};

const getRandomNumber = (max) => {
  const result = Math.floor(Math.random() * max);
  return result;
};

module.exports = generateNickname;
