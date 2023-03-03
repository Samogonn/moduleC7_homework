export function quickSort(arr) {
  if (!Array.isArray(arr)) return 'Incorrect value';

  if (arr.length < 2) {
    return arr;
  } else {
    //
    let dev = arr[Math.floor(Math.random() * arr.length)];
    const less = [];
    const greater = [];
    const equal = [];

    for (let i = 0; i < arr.length; i++) {
      if (dev > arr[i]) {
        less.push(arr[i]);
      } else if (dev < arr[i]) {
        greater.push(arr[i]);
      } else {
        equal.push(arr[i]);
      }
    }
    return quickSort(less).concat(equal, quickSort(greater));
  }
}
