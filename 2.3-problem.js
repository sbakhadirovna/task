let cost = Number(prompt("Narxni kiriting"));
let count = Number(prompt("Sonini kiriting"));
if(Number.isNaN(cost) ||Number.isNaN(count)) {
      alert("Narx yoki sonini kiritmadingiz");
    }else {

      alert(`Jami:${(cost*Math.floor(count)).toFixed(2)}`)
    }
