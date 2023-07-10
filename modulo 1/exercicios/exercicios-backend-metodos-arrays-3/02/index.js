const cities = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
]

const largerCityName = (arrayOfCities) => {
    let larger = null;
    larger = arrayOfCities.reduce((previousValue, currentValue) => {
        return previousValue.length > currentValue.length ? previousValue: currentValue;
        
    }) 
    console.log(larger)
};

largerCityName(cities);