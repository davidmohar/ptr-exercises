/*
Preberite znak in izpišite, ali je je 
prebran znak število ali črka.
(angleška abeceda)
*/
const input = require("readline-sync");

var znak = input.question("Vnesi znak: ").charCodeAt(0);
if (znak > 47 && znak < 58) {
    console.log("vpisal si števko");
}
else if (znak > 64 && znak < 91) {
    console.log("vpisal si veliko črko");
}
else if (znak > 96 && znak < 123) {
    console.log("vpisal si malo črko");
}
else if (znak > 32 && znak < 48) {
    console.log("vpisal si ločilo");
}