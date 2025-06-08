// * Date Object
// digunakan untuk bekerja dengan tanggal dan waktu.

// * Membuat Date Object
// tanggak dan waktu saat ini
let now = new Date();
console.log(now);

// menggunakan string
let specificDate = new Date("August 20, 2024 10:30:00");
console.log(specificDate);

// menggunakan parameter (tahun, bulan, hari, jam, menit, detik, milidetik)
let customDate = new Date(2024, 7, 17, 10, 30);
console.log(customDate);

// * Mengambil informasi tanggal dan waktu
let today = new Date();
console.log(today.getFullYear());
console.log(today.getMonth());
console.log(today.getDate());
console.log(today.getDay());
console.log(today.getTime());
console.log(today.getHours());
console.log(today.getMinutes());
console.log(today.getSeconds());
console.log(today.getMilliseconds());

// * Mengatur tanggal dan waktu
let date = new Date();

// Mengatur tahun menjadi 2025
date.setFullYear(2025);
console.log(date);
// mengatur bulan menjadi desember (11, karena bulan dimulai dari 0)
date.setMonth(11);
console.log(date);
// mengatur hari menjadi 25
date.setDate(25);
console.log(date);

// * Perhitungan waktu dengan date object
let startDate = new Date(2024, 7, 20, 10, 30);
let endDate = new Date(2024, 8, 3, 10, 30);

let diff = endDate - startDate;
console.log(diff); // milisecond

let diffIndays = diff / (1000 * 3600 * 24);
console.log(diffIndays);

// * Jawaban Tugas
/*
1. A
2. A
3. B
4. B
5. B
6. A
7. C
8. B
*/
