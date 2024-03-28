const WIDTH = 7;
let shape = "";

for (let j = 1; j <= WIDTH; j = j + 2) {
  let line = "";
  let empty = (WIDTH - j) / 2;

  line += " ".repeat(empty) + "#".repeat(j);

  shape += line;
  shape += "\n";
}

console.log(shape);
