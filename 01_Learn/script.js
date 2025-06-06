// TODO : nilai dan tipe data

/*
 * number
 * string
 * boolean
 * object
 * function
 * undefined
 */

// TODO : 1. angka
// numbers in javascript are double-precision floating point 64-bit format IEEE 754 values (tidak ada integer)
// jangan pernah mengawali angka dengan 0 (dianggap bilangan oktal) atau 0x (dianggap bilangan hexadesimal)

// * angka tanpa desimal (akurasinya sampai 15 digit angka)
console.log(10);
console.log(999999999999999); // 999999999999999
console.log(9999999999999999); // 10000000000000000

// * angka dengan desimal (maksimal 17 digit dibelakang koma (,))
console.log(3.14);
console.log(20.5);

// * eksponen
console.log(123e5);
console.log(123e-5);

// * bilangan negatif
console.log(-10);
console.log(-100);

// * angka spesial (infinity, -infinity, NAN (Not a Number))
console.log(2 / 0); // infinity
console.log(-2 / 0); // -infinity
console.log(0 / 0); // NAN

// TODO : 2. atring
// tipe data string dalam javascript digunakan untuk merepresentasikan data tekstual

// bisa menggunakan kutip 2 ("") atau kutip 1 ('')
console.log("Ardivan");
console.log('kami sedang mengadakan kegiatan "Gerakan pungut sampah"');

// escaoe character \" atau \'
console.log('"Gerakan Pungut Sampah" dilaksanakan pada hari Jum\'at');
console.log("ini adalah hari \n Jum'at"); // new line
console.log("ini adalah hari \t Jum'at"); // tab

// .lenght
console.log("Ardivan Nur Raihan Rahman".length);

// TODO : 3. boolean
// sebuah tipe data yang digunakan untuk merepresentasikan logika true atau false

console.log("Ardivan" == "ardivan");
console.log(20 > 2);
console.log(Boolean(2 > 10));
