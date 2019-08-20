/*
Preberite  število,  letnico,  in  izpišite,  ali  je  leto  prestopno  ali  ne.  (Ni  le  deljivost  s  štiri. Wikipedia)
*/
const input = require("readline-sync");

var leto = input.questionInt("Vnesi leto: ");

if(leto % 4 == 0) {
    if(leto % 100 == 0) {
        if(leto % 400 == 0) {
            console.log("prestopno");
        }
        else {
            console.log("ni prestopno");
        }
    }
    else {
        console.log("prestopno");
    }
}