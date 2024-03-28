function filterStringsByLength(arr, length) {
    let arr2=arr.filter(el=>el.length==length)
    return arr2
  }
  
  let words = ["apple", "banana", "kiwi", "grape"];
  
  console.log(filterStringsByLength(words, 6)); // -> ["banana"]
  console.log(filterStringsByLength(words, 5)); // -> ["apple", "grape"]
  console.log(filterStringsByLength(words, 3)); // -> []
  