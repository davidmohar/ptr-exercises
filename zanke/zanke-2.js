const input = require("readline-sync");
const print = function (s) { process.stdout.write(s) };

var N = input.questionInt("Vnesi N: ");
var max = Number.NEGATIVE_INFINITY;
for (var i = 0; i < N; i++) {
    var st = input.questionInt("Vnesi " + (i + 1) + ". stevilo: ");
    if (st > max) {
        max = st;
    }
}

console.log("Najvecji: " + max);