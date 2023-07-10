const usuários = [
    {
      nome: "André",
      idade: 29,
      habilitado: true,
    },
    {
      nome: "Marcos",
      idade: 70,
      habilitado: true,
    },
    {
      nome: "Ana",
      idade: 35,
      habilitado: true,
    },
    {
      nome: "Vinícius",
      idade: 44,
      habilitado: true,
    },
    {
      nome: "Carlos",
      idade: 18,
      habilitado: false,
    },
    {
      nome: "Maria",
      idade: 19,
      habilitado: true,
    },
  ];
  
  let ageVerification = null;
  let driverVerification = null;
  
  const licenseVerification = function(list) {
    driverVerification = list.every((usuario) => usuario.idade >= 18 && usuario.habilitado);
    if (driverVerification) {
        console.log("todos passaram no teste")
    } else {
        console.log("todos precisam estar habilitados")
     }
  };
  
  licenseVerification(usuários);
  