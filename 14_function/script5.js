// * Recursion
// Sebuah function memanggil dirinya sendiri secara langsung atau tidak langsung untuk menyelesaikan sebagian dari masalah yang diberikan. Setiap panggilan recursion membawa masalah tersebut lebih dekat ke kondisi dasar (base case) yaitu kondisi di mana recursion berhenti.

// * Struktur Recursion
/*
  Recursion biasanya terdiri dari 2 bagian penting
  1. Base Case (Kondisi dasar) : Bagian dari function yang menghentikan recursion
  2. Recursive Case : Bagian dari function yang memecah masalah menjadi sub-masalah yang lebih kecil dan memanggil dirinya sendiri.
*/

// * Contoh recursion faktorial
function faktorial(x) {
  // Base Case
  if (x === 0) {
    return 1;
  }
  // Recursive Case
  console.log(x);
  return x * faktorial(x - 1);
}
console.log(faktorial(5));

// TODO :  Gunakan recursion saat masalah dapat dipecah menjadi sub-masalah yang lebih kecil, ketika bekerja dengan struktur data seperti poho, atau saat algoritma backtracking diperlukan. Namun, selalu pertimbangkan kinerja dan risiko stack overflow sebelum menggunakan recursion
