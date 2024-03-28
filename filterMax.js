function findMaxValue(arr) {
    // return Math.max.apply(null, arr);
    const max = arr.reduce((a, b) => Math.max(a, b), -Infinity);
    return max;
  }
  
  console.log(findMaxValue([3, 8, 2, 5, 10])); // -> 10
  console.log(findMaxValue([3, 5, 4] ));
  console.log(findMaxValue([9, 4, 11, 34]));