function halv_array_swap(arr) {
  if (arr.length % 2 != 0) {
    return false;
  }

  for (var i = 0; i < arr.length / 2; i++) {
    var tmp = arr[i];
    arr[i] = arr[i + arr.length / 2];
    arr[i + arr.length / 2] = tmp;
  }
  return arr;
}

console.log(halv_array_swap([1, 2, 3, 4, 5, 6])); //true
  console.log(halv_array_swap([1,2,3,4,5,6,7])) //false