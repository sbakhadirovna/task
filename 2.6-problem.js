let x = Number(prompt("Xni kiriting"));
let y = Number(prompt("Yni kiriting"));
if (Number.isNaN(x) || Number.isNaN(y)) {
  alert("sonlarni kiritmadingiz");
} else {
  alert(Math.pow(x, y));
}