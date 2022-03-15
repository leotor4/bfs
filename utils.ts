const getVizinhos = (matriz: number[][], vertice: number) => {
    if(vertice > matriz.length || vertice < 0) throw 'Vertice inválido.';

    const vizinhos = [];

    for(let e in matriz[vertice]){
        if(matriz[vertice][e] > 0) vizinhos.push(parseInt(e));
    }

    return vizinhos;
}

/**
 * 
 * @param mapa Matriz de adjacência do grafo G
 * @param vertice Vértice a partir do qual se inicia a travessia do grafo.
 * @returns Lista com os antecessores de cada vértice percorrido.
 */
const bfs = (mapa: number[][], vertice: number) => {
    const verticesVisitados = Array<boolean>(mapa[0].length);
    for(let j=0; j<verticesVisitados.length; j++){
        verticesVisitados[j] = false;
    }
    const fila: number[] = [vertice];
    const caminho = [];
    for(let j=0; j< mapa[0].length; j++){
        caminho[j] = -1;
    }

    while(fila.length > 0){
        const v: number = fila.shift() as number;
        // console.log(v);

        if(verticesVisitados[v]) continue;

        verticesVisitados[v] = true;

        for(let vizinho of getVizinhos(mapa, v)){
            if(!verticesVisitados[vizinho]){
                fila.push(vizinho);
                // verticesVisitados[vizinho];
                caminho[vizinho] = v;
            }
        }
    }
    return caminho;
}

const _imprimeCaminho = (caminho: number[], vertice: number, verticeInicial: number) => {
    let i = vertice;
    let path = [];
    path.push(i);

    while(i){
        path.push(caminho[i]);
        i = caminho[caminho[i]];
    }
    return path.reverse();
}

const encontraCaminhoMaisCurto = (mapa: number[][], verticeInicial: number, verticeBuscado: number) => {
    const caminho = bfs(mapa, verticeInicial);
    console.log(_imprimeCaminho(caminho, verticeBuscado, verticeInicial));
}

export {encontraCaminhoMaisCurto, bfs};