const numeros = [2, 3, 4, 6];


// meu codigo aqui 

let sumatoria = 0;


for (var i = 0; i < numeros.length; i++) {
    sumatoria += numeros[i];


}

console.log(sumatoria);

let soma2 = 0

 for (const numero of numeros) {
    soma2 += numero;
 }

 console.log(soma2);

let a = 0
let soma3 = 0

while (a < numeros.length) {
    soma3 += numeros[a];
    a++;
}

console.log(soma3);