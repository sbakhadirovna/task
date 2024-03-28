function upperCaseStringArray(arr) {
    let result=arr.map(el=>el.toUpperCase())
    return result;
  }
  
  console.log(upperCaseStringArray(["foo", "a", "bar", "foobar"])); // -> ["FOO", "A", "BAR", "FOOBAR"]
  