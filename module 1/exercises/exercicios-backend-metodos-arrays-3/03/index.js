const numbers = [1, 98, -76, 0, 12, 19, 5, 60, 44];

const highestNumber = () => {
    let highest = null;
    highest = numbers.reduce((previousValue, currentValue) => {
    return previousValue > currentValue ? previousValue: currentValue} )
    console.log(highest);
};

highestNumber(numbers);

