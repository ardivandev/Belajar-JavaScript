// TODO : Operator
// sebuah simbol yang digunakan untuk melakukan operasi

/*
 * aritmatika
 * penugasan
 * perbandingan
 * logika
 * string
 * kondisional
 * typeof
 */

// TODO : 1. aritmatika
// +,-,*,/,%,
console.log(10 + 10); // 20
console.log(10 % 3); // 1 (sisa bagi)

// TODO : 2. penugasan
// =,+=,-=,*=,/=,%=
let x = 10;
console.log((x += 5)); // 15
console.log((x %= 2)); // 1

// TODO : 3. perbandingan
// ==,!=,===,!==,>,>=,<,<=
console.log("10" == 10); // true (nilainya saja)
console.log("10" === 10); // false (tipe datanya juga)

// TODO : 4. logika
// &&, ||, !
console.log(10 > 5 && 10 < 20); // true, dua-duanya harus benar
console.log(10 > 5 || 10 < 5); // true, salah satu benar maka benar
console.log(!(10 > 5)); // false, membalikan yang harusnya true menjadi false

// TODO : 5. string
// +, ``
console.log("Hello" + " " + "World!");
console.log("10" + 10 + 10); // 101010
console.log(10 + 10 + "10"); // 2010

// TODO : 6.kondisional
// (kondisi) ? benar : salah
let y = 90;
console.log(y > 75 ? "Lulus" : "Tidak Lulus");

// TODO : 7. typeof
// melihat tipe data
console.log(typeof "hello");
console.log(typeof 10);
