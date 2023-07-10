const adress = [
  { cep: "00111222", rua: "Rua dos Artistas" },
  { cep: "00111333", rua: "Rua Augusta" },
  { cep: "00222444", rua: "Avenida Paralela" },
  { cep: "11222333", rua: "Rua Carlos Gomes" },
];

let foundAdress = null;
let lookedAdress = "00222444";

const findStreet = function(lookedAdress) {
  foundAdress = adress.find((item) => item.cep === lookedAdress);
  console.log(foundAdress.rua);
};

findStreet(lookedAdress);
