import { encontraCaminhoMaisCurto, bfs } from "./utils";

const mapa: number[][] = [
   //0,1,2,3,4
    [0,1,1,1,0], //0
    [1,0,0,1,0], //1
    [1,0,0,1,0], //2
    [0,0,0,0,1], //3
    [0,0,0,1,0], //4
]

console.log(bfs(mapa, 2))

// encontraCaminhoMaisCurto(mapa, 2, 1);


// const verticesVisitados = [];




// const resposta = bfs(mapa, 0);
// console.log(resposta);

