/*
for (var i = 1; i < 11; i++) {
    if (i % 2 == 0) {
        console.log(i + " je sodo");
    }
    else {
        console.log(i + " je liho");
    }
}
*/

const input = require("readline-sync");
const print = function (s) { process.stdout.write(s) };

var d = input.questionInt("Vnesi d: ");

for (var i = 0; i < d; i++) {
    print("*");
}

print("\n");
