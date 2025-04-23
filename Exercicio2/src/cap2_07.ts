interface Aluno{
    nome:string;
    notas:Array<number>;
    frequencia:number;
}
function verificaAluno(aluno:Aluno):void{
    if(aluno.frequencia<75){
        console.log(`Aluno ${aluno.nome}está reprovado por falta`)

    }else{

        const media:number = (aluno.notas[0]+aluno.notas[1]+aluno.notas[2])/3;
        console.log(`Média = ${media}`);
        if(media >7){
            console.log("Aprovado")
        }else if( media>= 5 &&  media< 7){
            console.log("Recuperação")

        }else{
            console.log("Reprovado por nota")
        }
    }
}
const aluno1:Aluno={
    nome: "Ale",
    notas : [8,9,7],
    frequencia: 85,
};


verificaAluno(aluno1)



