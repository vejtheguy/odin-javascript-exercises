const repeatString = (string, num) => {
  if (num < 0) {
    return "ERROR";
  }

  let combineWords = "";
  for (let i = 0; i < num; i++) {
    combineWords = combineWords.concat(string);
  }
  return combineWords;
};

// Do not edit below this line
module.exports = repeatString;
