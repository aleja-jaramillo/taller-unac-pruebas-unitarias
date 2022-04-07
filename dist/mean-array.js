"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mean = void 0;
const sum_array_1 = require("./sum-array");
function mean(arr) {
    return (0, sum_array_1.sum)(arr) / arr.length;
}
exports.mean = mean;
//Codigo fuente tomado de https://www.analyticslane.com/2020/12/02/estructurar-el-proyecto-typescript-y-pruebas-unitarias-3o-parte-creacion-de-una-libreria-typescript/
