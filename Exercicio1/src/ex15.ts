interface Aluno {
    nome: string;
    matricula:number;
    ativo:boolean;
}
const alunos : Array<Aluno> = [
    {nome:"Alessandra",matricula:20241094040019,ativo:true},
    {nome:"Carol",matricula:20241094040010,ativo:false},
    {nome:"Pedro",matricula:20231093030018,ativo:true},
]

for (const aluno of alunos){
    if(aluno.ativo){
        console.log(aluno)
    }
}
