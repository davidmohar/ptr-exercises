const input = require("readline-sync");
const print = function (s) { process.stdout.write(s) };

var n = input.questionInt("Vnesi n: ");
for (var i = 0; i < n; i++) {
    for (var j = 0; j < i; j++) {
        print(" ");
    }

    for (var j = 0; j < n - i; j++) {
        print("*");
    }

    /*
        ALTERNATIVNA REŠITEV Z 1 NOTRANJO ZANKO

    for (var j = 0; j < n; j++) {
        if (j < i) {
            print(" ");
        }
        else {
            print("*");
        }
    }
    */

    print("\n");
}
