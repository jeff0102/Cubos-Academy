const disjuntores = [false, false, true, false, false, true, false, false];

// meu codigo aqui 

for (const [i, disjuntor] of disjuntores.entries()) {
    if (disjuntor) {
      console.log(i);
    }
  }

  // there is so many ways to solve this excercise but i choose this
  // because i liked, i see the explanation of the entries function in the internet;
  // i use a for of loop and the entries function to do a new array with the index and the value of the
  // previous elements of 'disjuntores' 