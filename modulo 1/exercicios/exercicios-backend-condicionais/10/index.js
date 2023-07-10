const caractere = "%";

if (caractere == "A" || caractere == "E" || caractere == "I"
 || caractere == "O" || caractere == "U") {
    console.log("Vogal maiúscula");
 }
    else if (caractere == "a" || caractere == "e" || caractere == "i"
        || caractere == "o" || caractere == "u") {
        console.log("Vogal minuscula");
 }
        else if (caractere.match(/[a-z]/)) {
            console.log("Consoante minuscula");
        }
        else if (caractere.match(/[A-Z]/)) {
            console.log("Consoante maiúscula");
        }
        else if (caractere.match(/[0-9]/)) {
            console.log("Numero");
        }
        else {
            console.log("Não é um caractere valido");
        }