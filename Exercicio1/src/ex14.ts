
interface Pessoa{
    nome: string;
    idade:number;
    profissão:string;
}
function descreverPessoa(p: Pessoa): string {
    return `${p.nome} tem ${p.idade} anos e sua profissão é ${p.profissão}`
} 

const p1:Pessoa = {nome: "Carol",idade: 19,profissão:"Analista de Sistemas"}

console.log(descreverPessoa(p1))