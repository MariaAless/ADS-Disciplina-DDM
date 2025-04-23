"use strict";
var DiaSemana;
(function (DiaSemana) {
    DiaSemana[DiaSemana["Segunda"] = 0] = "Segunda";
    DiaSemana[DiaSemana["Ter\u00E7a"] = 1] = "Ter\u00E7a";
    DiaSemana[DiaSemana["Quarta"] = 2] = "Quarta";
    DiaSemana[DiaSemana["Quinta"] = 3] = "Quinta";
    DiaSemana[DiaSemana["Sexta"] = 4] = "Sexta";
})(DiaSemana || (DiaSemana = {}));
const dia = DiaSemana.Quarta;
console.log(dia);
