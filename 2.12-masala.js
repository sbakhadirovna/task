let shape = "";

// qatorlar bir # (hash) bilan bir " " (empty space)
// bilan boshlanayapti. Shu narsani o'xshatish uchun
let turnOfHash = true;

const HEIGHT = 8;
const WIDTH = 8;
for (let i = 0; i < HEIGHT; i++) {
  // bu qatorni saqlab turish uchun o'rgaruvchi
  let line = "";

  // bu yerda qatorni yasaymiz
  for (let j = 0; j < WIDTH; j++) {
    // agar hashni navbati bo'lsa hash qo'shamiz
    // aks holda bo'sh joy
    let sign = turnOfHash ? "#" : " ";

    line = line + sign;

    // Hash va bo'sh joyni galini almashtirayapmiz
    turnOfHash = !turnOfHash;
  }

  turnOfHash = !turnOfHash;

  // qator tayyor bo'lsa qatorni shaklga qo'shib qo'yamiz
  // new line character qatorlar alohida qatorda chiqishi uchun
  shape = shape + line + "\n";
}

console.log(shape);