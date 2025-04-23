"use strict";
function verificarAprovacao(alunos) {
    for (const aluno of alunos) {
        const media = (aluno.notas[0] + aluno.notas[1] + aluno.notas[2]) / 3;
        const situacao = media >= 7 ? "Aprovado" : "Reprovado";
        console.log(`${aluno.nome} - Média: ${media.toFixed(2)} - Situação: ${situacao}`);
    }
}
const alunos = [
    { nome: "Ana", notas: [8, 7, 9] },
    { nome: "Bruno", notas: [5, 6, 5] },
    { nome: "Carlos", notas: [7, 7, 7] }
];
verificarAprovacao(alunos);
