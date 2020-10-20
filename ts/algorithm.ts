class Permutate {
  constructor(public arr: number[]){};
  output: number[] = [];

  swapInPlace(arrToSwap, indexA, indexB) {
    const temp = arrToSwap[indexA];
    arrToSwap[indexA] = arrToSwap[indexB];
    arrToSwap[indexB] = temp;
  }

  generate (n, heapArr) {
    if (n == 1) {
      this.output.push(heapArr.slice());
      return;
    }

    this.generate(n - 1, heapArr);

    for (let i = 0; i < n - 1; i++) {
      if (n % 2 == 0) {
        this.swapInPlace(heapArr, i, n - 1);
      } else {
        this.swapInPlace(heapArr, 0, n - 1);
      }

      this.generate(n - 1, heapArr);
    }
  };

  getPermutations(){
    this.generate(this.arr.length, this.arr.slice());
    return this.output;
  }
};

const permutations = new Permutate([1, 2, 3, 5]);

console.log(permutations.getPermutations())
