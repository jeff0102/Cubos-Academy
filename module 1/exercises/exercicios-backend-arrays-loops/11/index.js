const original = [5, 7, 13, 17, 26, 34, 118, 245];

// meu codigo aqui 

let newArray = [];

for (const number of original) {
    if (number >= 10 && number <=20 || number >=100) {
        newArray.push(number);
    }

}

console.log(newArray);

// easy peasy