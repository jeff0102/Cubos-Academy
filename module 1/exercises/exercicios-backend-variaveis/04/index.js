// definition of variables

let capital = 1000;
let interest = 0.125;
let time = 5;

let total = capital * (1 + interest) ** time;
let montante = Math.round(total);

console.log(montante);