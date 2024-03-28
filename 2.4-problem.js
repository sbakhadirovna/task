let a = Number(prompt("Tomonni  kiriting"));
let s=0
if(Number.isNaN(a)) {
  alert("tomonni kiritmadingiz");
    }else if(a>0){
      s=Math.pow(a,2)
       alert(s)
    }else{
      alert("tomon musbat son bo'lishi kerak")
    }