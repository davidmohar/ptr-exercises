const input = require("readline-sync");
const print = function (s) { process.stdout.write(s) };

var x = input.questionInt("Vnesi x: ");
var y = input.questionInt("Vnesi y: ");

var rezultat = 1;
for (var i = 0; i < y; i++) {
    rezultat = rezultat * x;
}

console.log("x^y = " + rezultat);
// console.log(rezultat);
