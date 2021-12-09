function arrayPlusArray(arr1, arr2) {
  let arr3 = arr1.concat(arr2);
  let num = 0;
  for (let i = 0; i < arr3.length; i++) {
    num += arr3[i];
  }
  return num
}