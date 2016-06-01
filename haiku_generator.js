var haiku = require('./haiku');
var loadParseFile = require('./load_parse_file');

// console.log(loadParseFile.syllableArr);

// Output a haiku with [[5],[7],[5]] structure
console.log("Haiku 1:");
console.log(haiku.createHaiku([[5],[7],[5]], loadParseFile.syllableArr));

// Output a haiku with [[5],[7],[5]] structure using Alice in Wonderland as the source
console.log("\nHaiku 2:");
console.log(haiku.createHaiku([[5],[7],[5]], loadParseFile.aliceStory));

// Output a haiku with a randomlly generated structure (still with the correct number of syllables per line)
console.log("\nHaiku 3:");
console.log(haiku.createHaiku(haiku.createStructure(), loadParseFile.syllableArr));

// Output a haiku with [[5],[7],[5]] structure using Ulysses as the source
console.log("\nHaiku 4:");
console.log(haiku.createHaiku([[5],[7],[5]], loadParseFile.ulyssesStory));

// Output a haiku with [[5],[7],[5]] structure using Macbeth as the source
console.log("\nHaiku 5:");
console.log(haiku.createHaiku([[5],[7],[5]], loadParseFile.macbethStory));
