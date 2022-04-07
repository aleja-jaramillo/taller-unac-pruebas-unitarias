"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.translateUnac = void 0;
function translateUnac(text) {
    switch (text) {
        case "hi": {
            return "hola";
        }
        case "bye": {
            return "adios";
        }
        case "moon": {
            return "luna";
        }
        default: {
            return "default";
        }
    }
}
exports.translateUnac = translateUnac;
