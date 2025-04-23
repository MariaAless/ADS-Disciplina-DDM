"use strict";
const idadePessoa = 20;
if (idadePessoa < 16) {
    console.log("Não vota");
}
else if (idadePessoa == 16 || idadePessoa == 17 || idadePessoa > 70) {
    console.log("Voto facultativo");
}
else {
    console.log("Voto obrigatório");
}
