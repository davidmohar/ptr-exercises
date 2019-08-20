const input = require("readline-sync");
const print = function (s) { process.stdout.write(s) };

var r = input.questionInt("Vnesi r: ");

for (var i = -r; i < r; i++) {
    for (var j = -r; j < r; j++) {
        if (i*i + j*j <= r*r) {
            print("*")
        }
        else {
            print(" ");
        }
    }

    print("\n");
}