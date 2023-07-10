const creditCard = '1111222233334444';
// 1. divide in 3 parts 2. replace the needed part 3. print

const shadowNumbers = function(cardNumber) {
    let initialNumbers = cardNumber.slice(0, 4);
    let middleNumbers = "*";
    let finalNumbers = cardNumber.slice(11, 15);
    console.log(`${initialNumbers}${middleNumbers.repeat(8)}${finalNumbers}`) //  repeat x times needed a variable in console.log
    
}

shadowNumbers(creditCard)