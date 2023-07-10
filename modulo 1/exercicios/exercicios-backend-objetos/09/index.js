const participantes = [
    { nome: "João" },
    { nome: "Ana" },
    { nome: "Beatriz" },
    { nome: "Maria" },
    { nome: "Ana Clara" },
    { nome: "Joana" },
    { nome: "Augusto" },
    { nome: "Renan" },
    { nome: "Patricia" },
    { nome: "Carlos" },
    { nome: "Renato" },
    { nome: "José" },
    { nome: "Roberto" },
    { nome: "Sara" },
    { nome: "Junior" },
    { nome: "Pedro" },
    { nome: "Vitor" },
    { nome: "Antonio" },
];

let posicao = -1;
let i = 0;

for (let participante of participantes) {
    if (participante.nome === 'José') {
        posicao = i;
        break;
    }
    i++;
}

if (i !== -1) {
    console.log(`Galera... O ${participantes[i].nome} está na posição ${i + 1}, corre lá!`);
}