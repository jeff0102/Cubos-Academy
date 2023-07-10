const original = [1, 4, 12, 21, 53, 88, 112];

// meu codigo aqui

let evenArray = [];


for (const pair of original) {
    if (pair % 2 === 0){ // for odd numbers is (pair % 2 !== 0)
        evenArray.push(pair);
    }
}

console.log(evenArray);