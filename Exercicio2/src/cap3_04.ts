const aluno = {
    nome: "Maria",
    idade: 21,
    curso: "Análise e Desenvolvimento de Sistemas"
};

for (const i in aluno) {
    console.log(`${i}: ${aluno[i as keyof typeof aluno]}`);
}