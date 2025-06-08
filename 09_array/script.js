// * Array
// struktur data yang digunakan untuk menyimpan koleksi elemen, seperti angka / string dalam satu variabel.

// * Membuat Array
// Menggunakan notasi array literal
let buah = ["apple", "mangga", "pisang"];
console.log(buah);
// Menggunakan new Array()
let num = new Array(1, 2, 3, 4, 5);
console.log(num);

// * Mengakses Elemen Array
console.log(buah[1]);

// * Menambah atau Mengubah elemen array
buah[3] = "Kelapa";
console.log(buah);
buah[2] = "jeruk";
console.log(buah);

// * Manipulasi Array
let numbers = [1, 2, 3];
numbers.push(4); // menambahkan elemen di paling belakang pada array
numbers.pop(); // menghapus elemen paling belakang pada array
numbers.shift(); // menghapus elemen paling pertama pada array
numbers.unshift(5); // menambahkan elemen di paling depan pada array
console.log(numbers);

let numbers2 = [4, 5];
let newNumbers = numbers.concat(numbers2); // gabungkan array
console.log(newNumbers);
console.log(newNumbers.slice(1, 3)); // mengambil elemen pada array
console.log(newNumbers.splice(3, 2, 10));
console.log(newNumbers);
console.log(newNumbers.indexOf(10));
console.log(newNumbers.includes(10));

// * Multidimensional Array
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [5, 6, 7],
];

console.log(matrix[1][1]);

// * Jawaban Tugas
/**
 1. B
 2. A
 3. A
 4. B
 5. C
 */
