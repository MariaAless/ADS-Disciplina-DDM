interface Aluno {
    nome: string;
    matricula:number;
    ativo:boolean;
}

const aluno1: Aluno = {nome:"Alessandra",matricula:20241094040019,ativo:true}

console.log(`A aluno(a) ${aluno1.nome} com a matricula ${aluno1.matricula} está com a situação ${aluno1.ativo} no sistema`)

