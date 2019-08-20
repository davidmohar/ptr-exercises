const input = require("readline-sync");
const print = function (s) { process.stdout.write(s) };

/*
    Kaj je praštevilo?
    Število, ki je deljivo z 1 in samim sabo.
    Števila, ki niso deljiva z nobenih številom (1, N).
*/

for (var i = 1; i < 101; i++) {
    var jePrast = true;
    for (var j = 2; j < i; j++) {
        if (i % j == 0) {
            jePrast = false;
            break;
        }
    }

    if (jePrast) {
        console.log(i);
    }
}