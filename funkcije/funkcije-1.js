const input = require("readline-sync");
const print = function (s) { process.stdout.write(s) };

// true, kadar je st prastevilo; false, kadar ni
function jePrastevilo(st) {
    for (var j = 2; j < st; j++) {
        if (st % j == 0) {
            return false;
        }
    }

    return true;
}

for (var i = 1; i < 101; i++) {
    if (jePrastevilo(i)) {
        console.log(i);
    }
}