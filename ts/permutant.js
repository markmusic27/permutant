"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
exports.__esModule = true;
exports.Permutant = void 0;
__exportStar(require("./permutant"), exports);
var Permutant = /** @class */ (function () {
    function Permutant(arr) {
        this.arr = arr;
        this.output = [];
    }
    ;
    Permutant.prototype.swapInPlace = function (arrToSwap, indexA, indexB) {
        var temp = arrToSwap[indexA];
        arrToSwap[indexA] = arrToSwap[indexB];
        arrToSwap[indexB] = temp;
    };
    Permutant.prototype.generate = function (n, heapArr) {
        if (n == 1) {
            this.output.push(heapArr.slice());
            return;
        }
        this.generate(n - 1, heapArr);
        for (var i = 0; i < n - 1; i++) {
            if (n % 2 == 0) {
                this.swapInPlace(heapArr, i, n - 1);
            }
            else {
                this.swapInPlace(heapArr, 0, n - 1);
            }
            this.generate(n - 1, heapArr);
        }
    };
    ;
    Permutant.prototype.getPermutations = function () {
        this.generate(this.arr.length, this.arr.slice());
        return this.output;
    };
    return Permutant;
}());
exports.Permutant = Permutant;
;
