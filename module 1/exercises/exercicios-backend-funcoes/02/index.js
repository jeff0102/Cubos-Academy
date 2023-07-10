// as instrucoes do exercicio estao erradas, no exercicio indican para
// botar no console toda mudanca nas propiedades do objeto e para isso acontecer, 
// a saida proposta como respota no README teria que ser diferente, entao em resumo,
// ou as instrucioes estao erradas ou a solucao no README esta


const car = {
    on: true,
    speed: 0,
    turnOn: function() {
        if (this.on === true){
            console.log(`The car was on`);
            return
        }
        else if (!this.on){
            this.on = true;
            console.log(`Car on. Speed: ${this.speed} `);
        }
    },
    turnOff: function() {
        if (this.on == false) {
            console.log(`The car was off`);
        }
        else {
            this.on = false;
            console.log(`Car off. Speed: ${this.speed} `)
        }
    },
    speedUp: function() {
        if (this.on === false) {
            console.log(`It´s not possivel speed up a turn off car`);
        }
        else if (this.on === true) {
            this.speed += 10;
            console.log(`Car on. Speed: ${this.speed} `)
        }
    },
    slowDown: function() {
        if (this.on === false) {
            console.log(`It´s not possivel slow down a turn off car`);
            return
        }
        else if (this.on === true && this.speed >= 0) {
            this.speed -= 10;
                console.log(`Car on. Speed: ${this.speed} `);
            }
        }
};

car.turnOff();
car.turnOn();
car.turnOn();
car.speedUp();
car.speedUp();
car.slowDown();
car.turnOff();
car.speedUp();
car.slowDown();

