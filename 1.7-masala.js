const getDayOfWeek = (day) => {
    switch (day) {
      case 1:
        return "dushanba";
      case 2:
        return "seshanba";
      case 3:
        return "chorshanba";
      case 4:
        return "payshanba";
      case 5:
        return "juma";
      case 6:
        return "shanba";
      case 7:
        return "yakshanba";
  
      default:
        return "Noto'g'ri hafta kuni";
    }
  };