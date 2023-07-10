// declaration of variables

const montante = 90000;
const capital = 60000;
const time = 24;

// insterest rate

let interest = ((montante / capital) ** (1 / time)) - 1;
interest = (interest.toPrecision(4) * 100)


console.log(`O seu financiamento de ${capital} $R teve uma taxa de juros de ${interest}%, pois após ${time} meses você teve que pagar ${montante} $R.`);
