const nameFile = 'Foto da Familia.gif';

// 1. make an array with the acepted formats
// 2. use the method includes for veification
// 3. print status 

const acceptedFormats = ["jpg", "jpeg", "gif", "png"];

const formatVerification = function(file) {
  let format = file.slice(file.length - 3);
  if (acceptedFormats.includes(format)) {
    console.log("Arquivo válido");
  } else {
    console.log("Arquivo inválido");
  }
};

formatVerification(nameFile);

// i forgot the method but i make a secod one attemp using
