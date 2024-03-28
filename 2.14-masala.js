const main = (rows)=> {
    // const rows = 9
    for (let i = 1; i <= rows; i=i+2) {
      let shape = '';
      for (let j = 0; j < rows - i; j++) {
        shape += ' ';
      }
      for (let k = 1; k <= i; k++) {
        shape += '# '
      }
      console.log(shape);
    }
  
    for (let i = rows-2 ; i >= 1; i=i-2) {
      let shape = '';
      for (let j = 1; j <= rows - i; j++) {
        shape += ' ';
      }
      for (let k = 1; k <= i; k++) {
        shape += '# '
  
      }
      console.log(shape);
    }
  };
  
  main(9);