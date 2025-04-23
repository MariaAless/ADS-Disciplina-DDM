interface Produtos  {
    nome: string;
    emEstoque: boolean;
}

function filtrarProdutosDisponiveis(produ: Array<Produtos>):Array<Produtos>{
        return produ.filter(produ=> produ.emEstoque)
} 

const listaProdutos: Array<Produtos> = [

    {nome: "vinho",emEstoque: true},
    {nome: "maçã",emEstoque: true},
    {nome: "arroz",emEstoque: false},
    {nome: "frango",emEstoque: false},
]

console.log(filtrarProdutosDisponiveis(listaProdutos))
