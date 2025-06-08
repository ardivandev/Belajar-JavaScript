// * Number

// Contoh Penggunaan Numbers
let bilanganBulat = 26;
let bilanganPecahan = 27.5;
let bilanganNegatif = -8;
let infinityValue = Infinity;
let notANumber = NaN;

// * Properti pada object number
/*
1. max_value
2. min_value
3. positive_infinity
4. negative_infinity
5. NaN
*/

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.NaN);

// * Metode Bawaan Number
// toString()
let num = 732.9;
console.log(num.toString(), typeof num.toString());

// toFixed() mengubah angka menjadi string dengan jumlah angka di belakang koma
let floating = 3.12344;
console.log(floating.toFixed(2)); // 3.12

// toPrecision() mengubah angka menjadi string dengan panjang total yang ditentukan
let float = 3.1244;
console.log(float.toPrecision(2)); // 3.1

// parseInt() dam parseFloat() mengubah string menjadi angka
let str = "100.46";
console.log(parseInt(str));
console.log(parseFloat(str));

// * Jawaban Tugas
/*
1. B
2. C
3. B
4. A
5. A
6. B
7. A
8. A
*/
