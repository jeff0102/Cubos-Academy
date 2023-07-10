const comentary = "Essa pandemia é muito perigosa!";
const forbiddenWords = ["pandemia", "covid"];

const wordsInAllCases = function() {
  const tempArray = [];
  const len = forbiddenWords.length;

  for (let i = 0; i < len; i++) {
    const word = forbiddenWords[i];
    tempArray.push(word.toUpperCase(), word.toLowerCase());
  }

  forbiddenWords.push(...tempArray); // ... the spread operator call individualy 
  // every item in temp array and forbiddenWords is not [[]] in this case 
  forbiddenWords.splice(0, len);
}

let comentaryVerification = function(comentary) {
    wordsInAllCases(comentary)

    for (let forbiddenWord of forbiddenWords) {
        if (comentary.includes(forbiddenWord)) {
          console.log("Comentário bloqueado por conter palavras proibidas");
          return; // Exit the function when a forbidden word is found
        }
      }
    
      console.log("Comentário autorizado.");
    }


comentaryVerification(comentary)
