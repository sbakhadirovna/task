const foo=(width)=>{
    let triangle=""
    for (let i = 0; i <= width; i++) {
        let line=""
        for (let j = 1; j <=i; j++) {
            line+='#'
            
        }
       triangle+=line;
       triangle+='\n'
    }
    return triangle;
  }
  
  console.log(foo(8));