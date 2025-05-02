function sort(arr) {
  let n = arr.length - 1;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i; j++) {
      if (arr[j] < arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  // arr.sort((a,b)=>b-a)
  return arr;
}

console.log(sort([4, 2, 1, 3]));
