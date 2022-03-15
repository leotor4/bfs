"use strict";
exports.__esModule = true;
exports.bfs = exports.encontraCaminhoMaisCurto = void 0;
var getVizinhos = function (matriz, vertice) {
    if (vertice > matriz.length || vertice < 0)
        throw 'Vertice inválido.';
    var vizinhos = [];
    for (var e in matriz[vertice]) {
        if (matriz[vertice][e] > 0)
            vizinhos.push(parseInt(e));
    }
    return vizinhos;
};
/**
 *
 * @param mapa Matriz de adjacência do grafo G
 * @param vertice Vértice a partir do qual se inicia a travessia do grafo.
 * @returns Lista com os antecessores de cada vértice percorrido.
 */
var bfs = function (mapa, vertice) {
    var verticesVisitados = Array(mapa[0].length);
    for (var j = 0; j < verticesVisitados.length; j++) {
        verticesVisitados[j] = false;
    }
    var fila = [vertice];
    var caminho = [];
    for (var j = 0; j < mapa[0].length; j++) {
        caminho[j] = -1;
    }
    while (fila.length > 0) {
        var v = fila.shift();
        // console.log(v);
        if (verticesVisitados[v])
            continue;
        verticesVisitados[v] = true;
        for (var _i = 0, _a = getVizinhos(mapa, v); _i < _a.length; _i++) {
            var vizinho = _a[_i];
            if (!verticesVisitados[vizinho]) {
                fila.push(vizinho);
                // verticesVisitados[vizinho];
                caminho[vizinho] = v;
            }
        }
    }
    return caminho;
};
exports.bfs = bfs;
var _imprimeCaminho = function (caminho, vertice, verticeInicial) {
    var i = vertice;
    var path = [];
    path.push(i);
    while (i) {
        path.push(caminho[i]);
        i = caminho[caminho[i]];
    }
    return path.reverse();
};
var encontraCaminhoMaisCurto = function (mapa, verticeInicial, verticeBuscado) {
    var caminho = bfs(mapa, verticeInicial);
    console.log(_imprimeCaminho(caminho, verticeBuscado, verticeInicial));
};
exports.encontraCaminhoMaisCurto = encontraCaminhoMaisCurto;
