"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sum = void 0;
function sum(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; ++i) {
        result += arr[i];
    }
    return result;
}
exports.sum = sum;
//Codigo fuente tomado de https://www.analyticslane.com/2020/12/02/estructurar-el-proyecto-typescript-y-pruebas-unitarias-3o-parte-creacion-de-una-libreria-typescript/
