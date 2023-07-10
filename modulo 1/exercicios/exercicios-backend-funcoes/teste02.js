sacar: function(valor) {
  let historicoAdicionado = {};
  let valorTemp = valor / 100;

  if (valor === this.saldo) {
    historicoAdicionado.tipo = "Saque";
    historicoAdicionado.valor = valor;
    contaBancaria.historicos.push(historicoAdicionado);
    console.log(`Saque de R$${valorTemp} realizado para o cliente: ${this.nome}`);
  } else if (valor < this.saldo) {
    this.saldo -= valorTemp;
    historicoAdicionado.tipo = "Saque";
    historicoAdicionado.valor = valor;
    contaBancaria.historicos.push(historicoAdicionado);
    console.log(`Saque de R$${valorTemp} realizado para o cliente: ${this.nome}`);
  } else {
    console.log(`Saldo insuficiente para o saque de: ${this.nome}`);
  }
}
