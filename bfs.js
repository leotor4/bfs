"use strict";
exports.__esModule = true;
var utils_1 = require("./utils");
var mapa = [
    //0,1,2,3,4
    [0, 1, 1, 1, 0],
    [1, 0, 0, 1, 0],
    [1, 0, 0, 1, 0],
    [0, 0, 0, 0, 1],
    [0, 0, 0, 1, 0], //4
];
console.log((0, utils_1.bfs)(mapa, 2));
// encontraCaminhoMaisCurto(mapa, 2, 1);
// const verticesVisitados = [];
// const resposta = bfs(mapa, 0);
// console.log(resposta);
