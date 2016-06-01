var fs = require('fs');

function createHaiku(structure, syllablesArr){
  var arrOfWords;
  return structure.map(function(lines){
    return lines.map(function(syls){
      arrOfWords = syllablesArr[syls];
      return arrOfWords[Math.floor(Math.random() * arrOfWords.length)];
    }).join(' ');
  }).join('\n');
}

// Creates an array of a random number of words that add up to the given syllable count
function randNumsAddUpToSum(numSyllables) {
  var result = [];
  var numWords = Math.floor(Math.random() * 7);
  for (var i = numWords; i > 0; i--) {
    var num = Math.floor(Math.random() * (numSyllables - 1)) + 1;
    result.push(num);
  }
  result.push(0, numSyllables);
  result.sort();
  result = result.map(function(num, index) {
    if (index === 0) {
      return undefined;
    } else {
      return num - result[index - 1];
    }
  });
  result.shift();
  result = result.filter(function(num) {
    return num > 0;
  });
  return result;
}

// Outputs a random haiku structure
function createStructure() {
  result = [[],[],[]];
  result.forEach(function(line, index) {
    if (index === 0 || index == 2) {
      result[index] = randNumsAddUpToSum(5);
    } else {
      result[index] = randNumsAddUpToSum(7);
    }
  });
  return result;
}

module.exports = {
  createHaiku: createHaiku,
  createStructure: createStructure
};
