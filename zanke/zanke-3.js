const input = require("readline-sync");
const print = function (s) { process.stdout.write(s) };

var n = input.questionInt("vnesi n: ");
var fak = 1;
for(var i = 2;i < n+1;i++){
    fak *= i;
}

console.log(fak);
