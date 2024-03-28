const calculateFactorial2 = (num) => {
    let total = 1;
    if (num == 0) {
      total;
    } else {
      for (let i = 1; i <= num; i++) {
        total *= i;
      }
    }
    return total;
  };