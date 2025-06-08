// * TYPE Conversion (proses mengubah tipe data)

// * Jenis konversi
/*
- implicit conversion
- explicit conversion
*/

// * Implicit

let result = "5" + 10;
let result1 = "5" - 10;
console.log(result, typeof result);
console.log(result1, typeof result1);

// * Eksplicit

let num = 100;
// let numString = String(num);
let numString = num.toString();

let string2 = "200.88";
let num1 = parseInt(string2);
let num2 = parseFloat(string2);

let bool1 = true;
let num3 = Number(bool1);
let bool2 = Boolean(num3);

console.log(numString, typeof numString);
console.log(num1, typeof num1);
console.log(num2, typeof num2);
console.log(num3, typeof num3);
console.log(bool2, typeof bool2);

// * Jawaban Tugas
/*
1. A
2. B
3. B
4. A
5. B
6. C
7. C
8. B
*/
