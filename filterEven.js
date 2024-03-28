function filterEvenNumbers(arr) {
    let arr2=arr.filter(el=>el%2==0)
    return arr2
  }
  
  console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6])); // -> [2, 4, 6]
  console.log(filterEvenNumbers([1, 3, 7]));
  