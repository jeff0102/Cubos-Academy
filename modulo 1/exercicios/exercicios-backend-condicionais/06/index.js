const alturaEmCm = 300;

//seu código aqui

if (alturaEmCm < 185) {
    console.log("REPROVADO");
}
else if (alturaEmCm >= 185 && alturaEmCm <186) {
    console.log("LÍBERO");
}
else if (alturaEmCm >= 186 && alturaEmCm <= 195) {
    console.log("PONTEIRO");
}
else if (alturaEmCm >= 196 && alturaEmCm <= 205) {
    console.log("OPOSTO");
}
else {
    console.log("CENTRAL");
}