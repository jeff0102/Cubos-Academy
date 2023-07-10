const fruits = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];

function cleanData(array) {

    let newArray = array.slice(); // fruits its a object, we need a copy and not a reference
    let newArray2 = array.slice();
    newArray.pop();
    newArray.shift();
    console.log(newArray.reverse().join(", "))
    newArray2.push("Melao");
    console.log(newArray2);
}

cleanData(fruits)
