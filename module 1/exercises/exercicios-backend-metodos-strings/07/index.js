const emails = ["jose@cubos.academy",	
"jose@cubos.academy.br",	
"jose.messias@cubos.academy",	
"jose.messias@cubos.io",	
"jose@cubos",	
"jose.messias@cubos",	
"jose.messias@.",	
"jose.@cubos",	
".@",	
"@.",	
"jose.messias@cubos.",	
".messias@cubos.",	
".messias@cubos"	];

// must have 1 "@", 1 ".", cant star or finish with "."
  
  const emailVerification = function(emails) {
    for (let email of emails) {
      let firstChar = email.slice(0, 1);
      let lastChar = email.slice(-1);
      let middleString = email.slice(1, email.length - 1);
      let at = 0;
      let dot = null;
  
      for (let char of middleString) {
        if (char == "@") {
          at += 1;
        } else if (char == ".") {
          dot = true;
        }
      }
  
      if (firstChar == "." || lastChar == "." || dot == null || at < 1) {
        console.log(`${email} - E-mail inválido`);
      } else {
        console.log(`${email} - E-mail válido`);
      }
    }
  };
  
  emailVerification(emails);
  