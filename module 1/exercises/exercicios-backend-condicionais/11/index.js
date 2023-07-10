//renda mensal do aluno, em centavos.
const rendaMensalEmCentavos = 300000;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 12;

// Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.
const totalJaPagoPeloAluno = 1000000;

// meu codigo aqui 

const valorParcelas = ((0.18 * rendaMensalEmCentavos) / 100).toFixed(2);


if (mesesDecorridos < 60 && rendaMensalEmCentavos >= 200000
    && totalJaPagoPeloAluno < 1800000) {
    console.log(`O valor da parcela desse mês é R$ ${valorParcelas}`);
} 
else if (mesesDecorridos >= 60 ) {
    console.log("O valor da parcela é R$ 0. Já que o aluno tem mais de 60 meses que adquirio a divida");
}
else if (rendaMensalEmCentavos < 200000) {
    console.log("O valor da parcela é R$ 0. Já que o aluno ainda não esta numa faixa salarial que permite fazer o pagamento");
}
else if (totalJaPagoPeloAluno >= 1800000) {
    console.log("O valor da parcela é R$ 0. Já que o aluno não te divida com a institucão");
}