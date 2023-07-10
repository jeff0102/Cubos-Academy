const idade = 17;
const possuiPatologia = true;
const altura = 180;
const ehEstudante = false;

// meu codigo aqui 

if (idade < 12 || idade >= 65 || possuiPatologia == true 
    || altura < 150)  {
        console.log("ACESSO NEGADO");
}
    else if (idade >= 12 && idade < 18 && possuiPatologia == false
        && altura > 150) {
            console.log("10 reais");
    }
        else if (idade >= 18 && possuiPatologia == false
            && altura > 150) {
                console.log("20 reais");
            }
