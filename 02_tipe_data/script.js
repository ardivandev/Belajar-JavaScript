// * TIPE DATA

// * Tipe data primitif
/*
- string
- number
- boolean
- undefined
- null
- symbol (ES6+)
- BigInt
*/

// * Tipe data reference
/*
- object
- array
- function
*/

const string1 = "Boy"; // bisa pakai (''), (""), dan (``)
let number1 = 17; // bisa int atau float
const boolean1 = true; // bisa true atau false
let undefined1; // variabel yang belum di definisikan
const null1 = null;
let symbol1 = Symbol("deskripsi symbol1");
let bigint1 = BigInt(182928383883938383938n);

console.log(string1, typeof string1);
console.log(number1, typeof number1);
console.log(boolean1, typeof boolean1);
console.log(undefined1, typeof undefined1);
console.log(null1, typeof null1);
console.log(symbol1, typeof symbol1);
console.log(bigint1, typeof bigint1);

const object1 = {
  nama: "Boy",
  umur: 17,
};
const array1 = ["apple", "jeruk", "mangga"];
function function1() {
  return "Hello World";
}

console.log(object1, typeof object1);
console.log(array1, typeof array1);
console.log(function1(), typeof function1);

// * Perbedaan tipe data primitive dan reference
// primitive
let a = 10;
let b = a; // b menyimpan nilai dari salinan dari a , b = 10
a = 20;
console.log(b); // output 10

// reference
let person = {
  nama: "Boy",
};
let person1 = person; // person1 akan menyimpan reference yang sama dengan object 1
let person2 = person1;
person.nama = "Ardivan";
console.log(person2.nama);

// * Jawaban Tugas
/*
1. B
2. C
3. C
4. A
5. A
6. B
7. C
8. A
9. B
10. A
11. B
12. A
13. B
*/
