const input = require("readline-sync");
const print = function (s) { process.stdout.write(s) };

var st1 = 1, st2 = 1;
var rezultat = 1;

console.log(rezultat);

while (rezultat < 1000) {
    console.log(rezultat);

    rezultat = st1 + st2;
    st1 = st2;
    st2 = rezultat;
}

/*
    Rekurzivni način.

const fibonacci = function (n) {
    if (n == 1 || n == 2) {
        return 1;
    }

    return fibonacci(n-1) + fibonacci(n-2);
}

var rezultat = 1;
for (var i = 1;;i++) {
    rezultat = fibonacci(i);
    if (rezultat > 1000) {
        break;
    }

    console.log(rezultat);
}
*/
