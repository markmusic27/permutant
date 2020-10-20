var Permutate = /** @class */ (function () {
    function Permutate(arr) {
        this.arr = arr;
        this.output = [];
    }
    ;
    Permutate.prototype.swapInPlace = function (arrToSwap, indexA, indexB) {
        var temp = arrToSwap[indexA];
        arrToSwap[indexA] = arrToSwap[indexB];
        arrToSwap[indexB] = temp;
    };
    Permutate.prototype.generate = function (n, heapArr) {
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
    Permutate.prototype.getPermutations = function () {
        this.generate(this.arr.length, this.arr.slice());
        return this.output;
    };
    return Permutate;
}());
;
var permutations = new Permutate([1, 2, 3, 5]);
console.log(permutations.getPermutations());
