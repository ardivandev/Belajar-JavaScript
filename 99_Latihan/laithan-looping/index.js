// Perulangan 1
let output = "";
// for (let i = 1; i <= 51; i += 10) {
//   output += i + " ";
// }
// console.log(output);

// Perulangan 2
// let hasil = 0;
// for (let i = 1; i <= 10; i++) {
//   output += i + " ";
//   hasil += i;
// }

// console.log(output);
// console.log(`Total : ${hasil}`);

// Perulangan 3
// let j = 0;
// for (let i = 40; i >= 10; i -= j) {
//   output += i + " ";
//   j += 2;
// }

// console.log(output);

// Pengulangan 4
// for (let i = 2; i <= 20; i += 2) {
//   if (i % 5 === 0) {
//     output += "Hai" + " ";
//   } else {
//     output += i + " ";
//   }
// }

for (let i = 1; i <= 10; i++) {
  console.log(`Perkalian : ${i}`);
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
  console.log("\n");
}
