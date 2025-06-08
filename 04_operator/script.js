// * Operator

// * Jenis Jenis Operator
/*
1. aritmatika (+,-,*,/,%,**,++,--)
2. assignment (+=,-=,*=,/=,%=,=)
3. perbandingan (==,===,!=,!==,>,<,>=,<=)
4. logika (&&(dua-duanya harus bernilai true), ||(salah satu harus bernilai true), !(membalikan nilai boolean))
5. ternary
*/

// * Aritmatika
let x = 10;
let y = 2;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y);
x++;
y--;
console.log(x);
console.log(y);

// * Assignment
console.log("\n== assignment ==");
let f = 10;
let g = 5;
console.log((f += g)); // 15
console.log((f -= g)); // 10
console.log((f *= g)); // 50
console.log((f /= g)); // 10
console.log((f %= g)); // 0

// * Perbandingan
console.log("\n== perbandingan ==");
let a = 10;
let b = "10";
let c = 3;
console.log(a == b); // true, nilainya aja
console.log(a === b); // false, sama tipe datanya
console.log(a != b); // false, nilainya aja
console.log(a !== b); // true, sama tipe datanya
console.log(a > c); // true
console.log(a < c); // false
console.log(a >= c); // true
console.log(a <= c); // false

// * Logika
console.log("\n== logika ==");
let m = true;
let n = false;

console.log(m && n); // false
console.log(m || n); // true
console.log(!(m && n)); // true

// * Ternary
// kondisonal yang merupakan cara singkat untuk menulis if-else
console.log("\n== ternary ==");
let age = 18;
let canVote = age >= 18 ? "Yes" : "No";
console.log(canVote);
