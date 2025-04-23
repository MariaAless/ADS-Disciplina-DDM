"use strict";
function descreverPessoa(p) {
    return `${p.nome} tem ${p.idade} anos e sua profissão é ${p.profissão}`;
}
const p1 = { nome: "Carol", idade: 19, profissão: "Analista de Sistemas" };
console.log(descreverPessoa(p1));
