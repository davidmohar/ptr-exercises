/*
    Napiši program, ki preveri ali je število sodo ali liho.
*/
const input = require("readline-sync");

var stevilo= input.questionInt("stevilo: ");
if (stevilo==0) {
    console.log("ne sodo, ne liho");
}
else if(stevilo % 2==0) {
    console.log("sodo");
}
else {
    console.log("liho");
}