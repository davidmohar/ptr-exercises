const input = require("readline-sync");
const print = function (s) { process.stdout.write(s) };

var n = input.questionInt("Vnesi n: ");
for (var i = 0; i < n; i++) {
    for (var j = 0; j < n + i; j++) {
        if (j < n - i - 1) {
            print(" ");
        }
        else {
            print("*");
        }
    }

    print("\n");
}

for (var i = 1; i < n; i++) {
    for (var j = 0; j < 2*n - i - 1; j++) {
        if (j < i) {
            print(" ");
        }
        else {
            print("*");
        }
    }

    print("\n");
}
