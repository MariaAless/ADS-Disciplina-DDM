"use strict";
function filtrarProdutosDisponiveis(produ) {
    return produ.filter(produ => produ.emEstoque);
}
const listaProdutos = [
    { nome: "vinho", emEstoque: true },
    { nome: "maçã", emEstoque: true },
    { nome: "arroz", emEstoque: false },
    { nome: "frango", emEstoque: false },
];
console.log(filtrarProdutosDisponiveis(listaProdutos));
