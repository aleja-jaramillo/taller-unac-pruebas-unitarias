"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crazy = void 0;
function crazy(number1, number2) {
    var result = 0;
    var numberTranslate = 0;
    result = result + number1;
    for (let i = 0; i < 3; i++) {
        number2++;
    }
    result = result + number2;
    result = result + numberTranslate;
    return result;
}
exports.crazy = crazy;
;
