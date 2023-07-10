const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    historicos: [],
    depositar: function (valor) { // en centavos 100 = 1
        let historicoAdicionado = {};
        let valorTemp = valor / 100;
        this.saldo += Number(valorTemp);
        historicoAdicionado.tipo = "Deposito";
        historicoAdicionado.valor = valor;
        this.historicos.push(historicoAdicionado);
        console.log(`Depósito de R$${valorTemp} realizado para o cliente: ${this.nome}`);
    },
    sacar: function (valor) {
        let historicoAdicionado = {};
        let valorTemp = valor / 100;

        if (valorTemp > this.saldo) {
            console.log(`Saldo insuficiente para o saque de: ${this.nome}`);
        } else {
            this.saldo -= Number(valorTemp);
            historicoAdicionado.tipo = "Saque";
            historicoAdicionado.valor = valor;
            this.historicos.push(historicoAdicionado);
            console.log(`Saque de R$${valorTemp} realizado para o cliente: ${this.nome}`);
        }
    },
    extrato: function () {
        console.log(`Extrato de ${this.nome} - Saldo: R$${this.saldo}\nHistórico:`);

        for (let transacao of this.historicos) {
            if (transacao.tipo === "Deposito") {
                console.log(`Depósito de R$${transacao.valor / 100}`);
            } else if (transacao.tipo === "Saque") {
                console.log(`Saque de R$${transacao.valor / 100}`);
            }
        }
    }
};

contaBancaria.depositar(10000);
contaBancaria.sacar(1000);
contaBancaria.extrato();
