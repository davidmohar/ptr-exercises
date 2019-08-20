const input = require("readline-sync");
const print = function (s) { process.stdout.write(s) };

var n = input.questionInt("Vnesi n: ");
for (var i = 0; i < n; i++) {
    for (var j = 0; j < i + 1; j++) {
        print("*");
    }
    print("\n");
}
