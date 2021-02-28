// js-sort

const sort = (a) => {
   let swap;
  let n = a.length-1 ;

  do {
    swap = false;
    for (let i = 0; i < n; i++) {
      if (a[i] < a[i + 1]) {
        let temp = a[i];
        a[i] = a[i + 1];
        a[i + 1] = temp;
        swap = true;
      }
    }
    n--;
} while (swap)
  return a;
};

console.log(sort([12, 345, 32, 2, 5252, 222, 11111, 636346, 32, 1]));
