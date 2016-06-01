var total = 5;
var total_random = 0;
var result = [];
var numWords = 4;
for (var i = numWords - 1; i > 0; i--) {
	var num = Math.floor(Math.random() * 4) + 1;
	result.push(num);
	total_random += num;
}
result.push(0, 5);
result.sort();
console.log(result);
result = result.map(function(num, index) {
	if (index === 0) {
		return undefined;
	} else {
		return num - result[index - 1];
	}
});
result.shift();
console.log(result);
result = result.filter(function(num) {
	return num > 0;
})
console.log(result);
