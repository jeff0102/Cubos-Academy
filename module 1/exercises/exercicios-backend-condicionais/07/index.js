const aposentada = false;
const portadoraDeDoenca = false;
const totalDeRendimentos = 28559.69; //emCentavos

//seu código aqui

if (totalDeRendimentos > 28559.70 && portadoraDeDoenca == true 
    && aposentada == true) {
        console.log("ISENTA");
    }
    else if (totalDeRendimentos > 28559.70 && portadoraDeDoenca == false
        && aposentada == false) {
            console.log("PEGA LEAO");
        }
        else if (totalDeRendimentos < 28559.70 ) {
            console.log("VAZA LEAO! JA TA DIFICIL SEM VOCE");
        }