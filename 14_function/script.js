// * Function
// blok kode yang dirancang untuk melakukan tugas tertentu dan dapat digunakan berulang kali.

// * Membuat function
function sapaPengguna(nama) {
  console.log(`Halo ${nama}`);
}

// * Memanggil function
sapaPengguna("Ardivan");

// * Parameter dan Argumen
// parameter adalah variabel yang didefinisakn dalam deklarasi function. Argumen adalah nilai yang diberikan saat function dipanggil.

function tambah(a, b) {
  console.log(a + b);
}
tambah(10, 2);

// a dan b adalah parameter, sedangkan 10 dan 2 adalah argumen

// * Return Statement
// setelah return dieksekusi, eksekusi function akan berhenti.

function kuadrat(num) {
  return num * num;
}
let kuadrat4 = kuadrat(4);
console.log(kuadrat4);

// * Jawaban tugas
/*
1. B
2. A
3. C
4. B
*/

// * Soal
// Buatlah function bernama kali yang menerima dua parameter dan mengembalikan hasil perkalian dari kedua parameter tersebut. Kemudian, panggil function tersebut dengan memberikan dua angka sebagai argumen.
function kali(a, b) {
  return a * b;
}
console.log(kali(10, 10));
