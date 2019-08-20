/*
    Napiši program, ki preveri ali je število pozitivno ali negativno.
*/
const input = require("readline-sync");
var stevilo = input.questionInt("input ");
if(stevilo<0){
    console.log("negativno");
}
else if (stevilo==0) {
    console.log("stevilo je 0");
}
else {
    console.log("stevilo je pozitivno");
}