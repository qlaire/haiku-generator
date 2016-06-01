var fs = require("fs");
var cmudictFile = readCmudictFile('./cmudict.txt');
var alice = readCmudictFile('./alice_in_wonderland.txt');
var ulysses = readCmudictFile('./ulysses.txt');
var macbeth = readCmudictFile('./macbeth.txt');
var syllableObj = createSyllableObject(cmudictFile);

function readCmudictFile(file){
  return fs.readFileSync(file).toString();
}

function formatData(data){
   var lines = data.toString().split("\n"),
       lineSplit;
   lines.forEach(function(line){
    lineSplit = line.split("  ");
    console.log("The word " + lineSplit[0] + " has this phoneme    layout: " + lineSplit[1]);

  });
}

function parseStory(story, syllableObj) {
  var lines = story.toString().split("\n");
  var result = [];
  lines.forEach(function(line, index) {
    var words = line.split(" ");
    var phrase = [];
    var numSyllables = 0;
    if (index % 2 === 0) {
      for (var i = 0; i < words.length; i++) {
        if (syllableObj[words[i].toUpperCase()]) {
          numSyllables += Number(syllableObj[words[i].toUpperCase()]);
        } else {
          break;
        }
        phrase.push(words[i]);
        if (numSyllables == 5) {
          if (result[5]) {
            result[5].push(phrase.join(" "));
          } else {
            result[5] = [phrase.join(" ")];
          }
          break;
        } else if (numSyllables > 5) {
          break;
        }
      }
    } else {
      for (var j = 0; j < words.length; j++) {
        if (syllableObj[words[j].toUpperCase()]) {
          numSyllables += Number(syllableObj[words[j].toUpperCase()]);
        } else {
          break;
        }
        phrase.push(words[j]);
        if (numSyllables == 7) {
          if (result[7] !== undefined) {
            result[7].push(phrase.join(" "));
          } else {
            result[7] = [phrase.join(" ")];
          }
          break;
        } else if (numSyllables > 7) {
          break;
        }
      }
    }
  });
  return result;
}

function createSyllableObject(data) {
  var result = {},
      lines = data.toString().split("\n"),
      lineSplit;
  lines.forEach(function(line) {
    lineSplit = line.split("  ");
    var syllableCount = 0;
    if (lineSplit[1]) {
      lineSplit[1].split(" ").forEach(function(phoneme) {
        if (phoneme.match(/\d/)) {
          syllableCount++;
        }
      });
      result[lineSplit[0]] = syllableCount;
    }
  });
  return result;
}

function createSyllableArray(data) {
  var result = [],
      lines = data.toString().split("\n"),
      lineSplit;
  lines.forEach(function(line) {
    lineSplit = line.split("  ");
    var syllableCount = 0;
    if (lineSplit[1]) {
      lineSplit[1].split(" ").forEach(function(phoneme) {
        if (phoneme.match(/\d/)) {
          syllableCount++;
        }
      });
      if (result[syllableCount] === undefined) {
        result[syllableCount] = [lineSplit[0]];
      } else {
        result[syllableCount].push(lineSplit[0]);
      }
    }
  });
  return result;
}

module.exports = {
  readCmudictFile: readCmudictFile,
  formatData: formatData,
  syllableArr: createSyllableArray(cmudictFile),
  aliceStory: parseStory(alice, syllableObj),
  ulyssesStory: parseStory(ulysses, syllableObj),
  macbethStory: parseStory(macbeth, syllableObj)
};
