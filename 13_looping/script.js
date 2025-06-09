// * Looping
// for, while, do..while
// for-in, for-of untuk object atau array

// * Kepan menggunakan jenis loop yang berbeda
/*
- for : ketika jumlah iterasi sudah dikatahui
- while : ketika iterasi bergantung pada kondisi yang mungkin tidak diketahui sebelumnya
- do..while : ketika anda perlu menjalankan kode setidaknya 1 kali sebelum mengecek kondisi
*/

console.log("For");
for (let i = 1; i <= 5; i++) {
  console.log("Iterasi ke-" + i);
}

console.log("\nWhile");
let i = 1;
while (i <= 5) {
  console.log("Iterasi ke-" + i);
  i++;
}

console.log("\nDo While");
let z = 1;
do {
  console.log("Iterasi ke-" + z);
  z++;
} while (z <= 5);

console.log("\nFor In");
let x = { nama: "Ardivan", umur: 17 };
for (let i in x) {
  console.log(`${x[i]}`);
}

console.log("\n For Of");
let y = ["apple", "jambu", "pisang"];
for (let i of y) {
  console.log(`${i}`);
}

// * Jawaban Tugas
/*
1. B
2. C
3. C
*/

for (let x = 1; x <= 10; x++) {
  if (x === 5) {
    continue;
  }
  console.log(x);
}
