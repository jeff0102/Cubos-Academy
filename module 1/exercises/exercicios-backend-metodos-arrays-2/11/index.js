const names = [
    "Maria",
    "João",
    "José",
    "Antonio",
    "Beatriz",
    "Camila",
    "amanda",
  ];

const returnedNames = function(listNames) {
    let returnedArray = listNames.filter((name) => name.slice(0, 1) === "a" || name.slice(0, 1) === "A");
    console.log(returnedArray);
};

returnedNames(names)