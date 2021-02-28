function halv_array_swap(arr) {
  let new_arr = [];
  if (arr.length % 2 != 0) {
    new_arr.push(arr.pop());

    for (let i = 0; i < new_arr.length / 2; i++) {
      let tmp = new_arr[i];
      new_arr[i] = new_arr[i + new_arr.length / 2];
      new_arr[i + new_arr.length / 2] = tmp;
    }
  }
  if (arr.length % 2 == 0) {
    for (let i = 0; i < arr.length / 2; i++) {
      let tmp = arr[i];
      arr[i] = arr[i + arr.length / 2];
      arr[i + arr.length / 2] = tmp;
    }
    return arr;
  }
  if (typeof arr == string) 
    throw new Error("please enter a array");

  return new_arr;
}

// console.log(halv_array_swap([1, 2, 3, 4, 5, 6])); //[ 4, 5, 6, 1, 2, 3 ]
// console.log(halv_array_swap([1, 2, 3, 4, 5, 6, 7])); //[ 4, 5, 6, 1, 2, 3 ]
// console.log(halv_array_swap(["1","2","3","4","5","6"]));//[ '4', '5', '6', '1', '2', '3' ]
// console.log(halv_array_swap("muhamemt")) // please enter a array 
