let yosh = Number(prompt("Son kiriting"));

if (Number.isNaN(yosh)) {
  alert("Son kiritmadingiz");
} else if (yosh < 0) {
  yosh = Math.abs(yosh);
  alert(`Siz ${yosh} yoshdasiz`);
}