const calculateFactorial = (num) => {
    let i = 1,
      total = 1;
  
    if (num == 0) {
      total;
    } else {
      while (i <= num) {
        total *= i;
        i++;
      }
    }
    return total;
  };