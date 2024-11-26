// Variablen mit let, const, var
let age = 25;
const name = 'John';
var isLoggedIn = true;

// Unterschied zwischen let und var
if (true) {
    let blockScoped = 'Nur hier sichtbar';
    var functionScoped = 'Überall in der Funktion sichtbar';
}
// console.log(blockScoped); // Fehler
console.log(functionScoped); // Funktioniert

//let und const gelten nur im Block, in dem sie definiert wurden. Also in den geschweiften Klammern {}
//var gilt in der gesamten Funktion, was manchmal zu Fehlern führt