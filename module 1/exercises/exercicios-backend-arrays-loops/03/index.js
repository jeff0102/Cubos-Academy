const numeros = [54, 22, 14, 87, 10, 284];

// meu codigo aqui 

let found = false;

for (const position of numeros) {
  if (position === 10) {
    console.log(numeros.indexOf(position));
    found = true;
    break;
  }
}

if (!found) {
  console.log(-1);
}


