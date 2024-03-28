let S = Number(prompt("Yuzani  kiriting"));
let a=0
if(Number.isNaN(S)) {
  alert("tomonni kiritmadingiz");
    }else if(S>0){
      a=Math.sqrt(S)
       alert(a)
    }else{
      alert(NaN)
    }