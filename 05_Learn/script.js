// TODO : Control Flow

// * Normal Flow
// apabila kita memiliki lebih dari 1 statement, maka statement tersebut akan dieksekusi dari atas ke bawah atau dari kiri ke kanan

// ? Control Flow
// * Pengulangan
/*
- for
- while
- do..while
*/
alert("Mulai");
for (let i = 0; i < 5; i++) {
  alert("Hello World");
}
alert("Selesai");

// * Pengkondisian
/*
if 
if else
if else if
switch case
*/
let angka = prompt("Masukkan angka:");
if (angka % 2 === 0) {
  alert(`${angka} adalah bilangan genap`);
} else {
  alert(`${angka} adalah bilangan ganjil`);
}
