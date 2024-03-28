function reverseStringArray(arr) {
 
    let reversed=arr.map(el=>el.split("").reverse().join(""))
     return reversed
  }
  
   // -> ["elppa", "ananab", "yrrehc"]
   console.log(reverseStringArray(["apple", "banana", "cherry"]));
  
  