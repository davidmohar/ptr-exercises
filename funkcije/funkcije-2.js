const input = require("readline-sync");

/*
    Napiši funkcijo fib(n), ki vrne n-to Fibonaccijevo št.
    Izpiši prvih 20.
*/

function fib(n) {
    if (n == 1) {
        return 1;
    }

    var st1 = 0, st2 = 1;
    var rezultat = 1;

    for (var i = 0; i < n-1; i++) {
        rezultat = st1 + st2;
        st1 = st2;
        st2 = rezultat;
    }

    return rezultat;
}

for (var i = 1; i <= 20; i++) {
    console.log(fib(i));
}