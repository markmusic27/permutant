class Permutate {
  List arr = [];
  Permutate({this.arr});
  List output = [];

  swapInPlace(arrToSwap, indexA, indexB) {
    List temp = arrToSwap[indexA];
    arrToSwap[indexA] = arrToSwap[indexB];
    arrToSwap[indexB] = temp;
  }

  generate(n, List heapArr) {
    if (n == 1) {
      output.add(heapArr.sublist(0));
      return;
    }

    generate(n - 1, heapArr);

    for (int i = 0; i < n - 1; i++) {
      n % 2 == 0
          ? this.swapInPlace(heapArr, i, n - 1)
          : this.swapInPlace(heapArr, 0, n - 1);
      generate(n - 1, heapArr);
    }
  }

  getPermutations() {
    generate(arr.length, arr.sublist(0));
    return output;
  }
}

main() {
  Permutate permutations = Permutate(arr: [1, 2]);
  print(permutations.getPermutations());
}
