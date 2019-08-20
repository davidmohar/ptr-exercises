const input = require("readline-sync");
const print = function (s) { process.stdout.write(s) };

var n = input.questionInt("Vnesi n: ");
var m = input.questionInt("Vnesi m: ");

for (var s = 0; s < m; s++) {
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n - i - 1; j++) {
            print(" ");
        }

        for (var j = 0; j < 2*i + 1; j++) {
            print("*");
        }

        print("\n");
    }
}

var d = n;
if (d % 2 == 0) {
    d--;
}

for (var i = 0; i < d; i++) {
    for (var j = 0; j < n - 1 - d / 2; j++) {
        print(" ");
    }
    for (var j = 0; j < d; j++) {
        print("*");
    }

    print("\n");
}