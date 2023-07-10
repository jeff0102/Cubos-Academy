const ladoA = 1;
const ladoB = 2;

if (ladoA == 0 && ladoB == 0) {
    console.log("Bucha de branco");
} 
else if (ladoA == 1 && ladoB == 1 ) {
    console.log("Bucha de as");
}
else if (ladoA == 2 && ladoB == 2) {
    console.log("Bucha de duque");
}
else if (ladoA == 3 && ladoB == 3) {
    console.log("Bucha de terno");
}
else if (ladoA == 4 && ladoB == 4) {
    console.log("Bucha de quadra");
}
else if (ladoA == 5 && ladoB == 5) {
    console.log("Bucha de quina");
}
else if (ladoA == 6 && ladoB == 6) {
    console.log("Bucha de sena");
}
else {
    console.log("isso não é uma bucha");
}