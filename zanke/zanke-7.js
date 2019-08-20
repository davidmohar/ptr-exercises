const input = require("readline-sync");
const print = function (s) { process.stdout.write(s) };

var d = input.questionInt("Vnesi d: ");

for (var i = 0; i < d; i++) {
    for (var j = 0; j < d; j++) {
        print("*");
    }

    print("\n");
}
