// 2.1-masala
// 1. Foydalanuvchidan yoshini so'rang
// 2. Agar foydalanuvchi son kiritmagan bo'lsa "Son kiritmadingiz" deb ayting
// 3. Agarda manfiy son kiritgan bo'lsa uni musbatga o'girib oling, ya'ni -10 kiritsa shu 10 ga aylantirib olishingiz kerak.
// 4. Yakunda "Siz " + yosh " yoshdasiz" deb javob qaytaring (3 -> "Siz 3 yoshdasiz", -4 -> "Siz 4 yoshdasiz")

// let yosh = Number(prompt("Son kiriting"));

// if (Number.isNaN(yosh)) {
//   alert("Son kiritmadingiz");
// } else if (yosh < 0) {
//   yosh = Math.abs(yosh);
//   alert(`Siz ${yosh} yoshdasiz`);
// }

// if(Number.isNaN(yosh)) {
//     alert("Son kiritmadingiz");
//   }else if(yosh>0){
//     yosh=Math.ceil(yosh);
//     alert(yosh)
//   }

// let cost = Number(prompt("Narxni kiriting"));
// let count = Number(prompt("Sonini kiriting"));
// if(Number.isNaN(cost) ||Number.isNaN(count)) {
//       alert("Narx yoki sonini kiritmadingiz");
//     }else {

//       alert(`Jami:${(cost*Math.floor(count)).toFixed(2)}`)
//     }

// let a = Number(prompt("Tomonni  kiriting"));
// let s=0
// if(Number.isNaN(a)) {
//   alert("tomonni kiritmadingiz");
//     }else if(a>0){
//       s=Math.pow(a,2)
//        alert(s)
//     }else{
//       alert("tomon musbat son bo'lishi kerak")
//     }

// let S = Number(prompt("Yuzani  kiriting"));
// let a=0
// if(Number.isNaN(S)) {
//   alert("tomonni kiritmadingiz");
//     }else if(S>0){
//       a=Math.sqrt(S)
//        alert(a)
//     }else{
//       alert(NaN)
//     }

let x = Number(prompt("Xni kiriting"));
let y = Number(prompt("Yni kiriting"));
if (Number.isNaN(x) || Number.isNaN(y)) {
  alert("sonlarni kiritmadingiz");
} else {
  alert(Math.pow(x, y));
}
