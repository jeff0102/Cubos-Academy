// definition of variables

let price = 129.99;
let moneyAvailable = 80;
let total = ((price - moneyAvailable) / price) * 100;

// discount with one decimal point

let porcentageOfDiscount = total.toFixed(1);

console.log(`d ≅ ${porcentageOfDiscount}`);