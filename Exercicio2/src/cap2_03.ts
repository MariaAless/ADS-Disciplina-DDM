let linguagem: number = 2;
let nomeLinguagem: string;

switch (linguagem) {
    case 1:
        nomeLinguagem = "TypeScript";
        break;
    case 2:
        nomeLinguagem = "JavaScript";
        break;
    case 3:
        nomeLinguagem = "Python";
        break;
    default:
        nomeLinguagem  = "Linguagem não cadastrada";
}

console.log(nomeLinguagem); 
