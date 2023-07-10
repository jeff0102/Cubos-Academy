const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
};

let acertou = 0;
let nota = 0;

function corrigirProva(prova) {
    for (aluno of prova.questoes) {
    if (aluno.resposta == aluno.correta) {
        acertou++;
        }
    }
    nota += 2 * acertou;
}

corrigirProva(prova);
console.log(`O aluno(a) ${prova.aluno} acertou ${acertou} questões e obteve nota ${nota}`);