const numbers = [10, 987, -886, 0, 12, 199, -45, -67]

const positiveNumbers = function (list) {
    list = list.filter((item) => item > 0 )
    console.log(list)
};

positiveNumbers(numbers)