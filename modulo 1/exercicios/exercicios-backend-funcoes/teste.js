sacar: function(valor) {
    if (valor === this.saldo) {
        let historicoAdicionado = {};
        let valorTemp = valor / 100;
        this.saldo -= valorTemp;
        historicoAdicionado.tipo = "Saque";
        historicoAdicionado.valor = valor;
        contaBancaria.historicos.push((historicoAdicionado))
        console.log(`Saque de R$${valorTemp} realizado para o cliente: ${this.nome}`)
    }
    else if (valor < this.saldo) {
        let historicoAdicionado = {};
        let valorTemp = valor / 100;
        this.saldo -= valorTemp;
        historicoAdicionado.tipo = "Saque";
        historicoAdicionado.valor = valor;
        contaBancaria.historicos.push((historicoAdicionado))
        console.log(`Saque de R$${valorTemp} realizado para o cliente: ${this.nome}`)
    }
}