const valorDaCompra = 100;
const numeroDeParcelas = 10;
const valorVista = 0.9 * valorDaCompra;
const valorParcelas = (valorDaCompra / numeroDeParcelas);
const montante = (valorDaCompra * (1 + 0.01) ** numeroDeParcelas);
const montanteParcelado = (montante / numeroDeParcelas );

if (numeroDeParcelas === 1) {
    console.log(`El pago es al contado por ${valorVista}R$`);
}
else if (numeroDeParcelas >= 7 && numeroDeParcelas <= 12) {
    console.log(`El pago es de ${numeroDeParcelas} parcelas de ${montanteParcelado.toFixed(2)} R$`);
}
else if (numeroDeParcelas > 1 && numeroDeParcelas < 7) {
    console.log(`El pago es de ${numeroDeParcelas} parcelas de ${valorParcelas}R$`);
}
else {
    console.log(`precisa escolher um numero menor de parcelas`);
}