// cartao de consumo dos clientes que vai ter:
// 1 nome
// 2 idade
// 3 produtos consumidos (minimo 3 produtos) 
// 3.1 nome do produto
// 3.2 preco do produto
// 3.3 quantidade comprada do produto
const product = [{
    nameOfProduct: "Assas apimentadas",
    priceProduct: 1000, // em centavos 
    quantityProduct: 2
},
    {
        nameOfProduct: "Costelas BBQ",
        priceProduct: 10000, // em centavos 
        quantityProduct: 1
    },
       {
           nameOfProduct: "Pizza portuguesa",
           priceProduct: 7000, // em centavos 
           quantityProduct: 1
       }]

const ticket = {
    name: 'A Jhine',
    age: 38,
    product
}

let provisonaryTotal = 0;
let total = 0;

for (const item of product) {
    provisonaryTotal = item.quantityProduct * item.priceProduct;
    total += provisonaryTotal;
}

ticket.name = 'Jhine'
ticket.age = 28

console.log(`cara ${ticket.name}, paga mmgva (porfis) ${total / 100}`)