/*
    Napiši program, ki prebere dve števili in izpiše manjšega
*/
const input = require("readline-sync");

var stevilo1 = input.questionInt("stevilo1 ");
var stevilo2 = input.questionInt("stevilo2 ");
if (stevilo1 < stevilo2) {
    console.log(stevilo1);
} 
else {
    console.log(stevilo2);
}