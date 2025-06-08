// * String
// dapat dibuat dengan (''), (""), (``)
// setiap karakter dalam string memiliki indeks, yang dimulai dari 0

let person = "Ardivan";
console.log(person[0]); // A

// Method dan properti di dalam string
console.log(person.length); // 7
console.log(person.toUpperCase()); // mengubah menjadi huruf besar
console.log(person.toLowerCase()); // mengubah menjadi huruf kecil

let testTrim = "  Hello World  ";
console.log(testTrim.trim()); // menghilangkan spasi di awal dan di akhir

// Manipulasi string
// concat (penggabungan string)
let firstName = "Ardivan";
let lastName = "Nur Raihan Rahman";
// console.log(firstName + " " + lastName);
console.log(`${firstName} ${lastName}`);

// Mengambil bagian dari string
console.log(person.slice(0, 4));
console.log(person.substring(4, 6));

// Mengganti bagian dari string
// value pertama, value baru
console.log(person.replace("Ardivan", "Hello World"));

// Menggabungkan array menjadi string
const arr = ["apple", "mangga", "jambu"];
console.log(arr.join(","), typeof arr.join(","));

// Menggabungkan string menjadi array
// 3 sama dengan limit
const testString = "apple,jambu,mangga,pisang,kelapa,jambu";
console.log(testString.split(",", 3));

// Pencarian di dalam string
console.log(testString.indexOf("jambu")); // 6 (indeks pertama dari kata jambu pertama)
console.log(testString.lastIndexOf("jambu")); // 33 (indeks pertama dari kata jambu terakhir)
console.log(testString.includes("jambu")); // mengecek apakah jambu ada pada variabel testString

// * Jawaban Tugas
/*
1. B
2. B
3. C
4. C
5. C
6. B
7. A
8. B
9. Tuliskan kode untuk menggabungkan dua string 'Hello' dan 'JavaScript' menggunakan template literals.
10. Tuliskan kode yang membagi string 'test-array-di-string' menjadi array berdasarkan '-' sebagai separator.
*/

let a = "Hello";
let b = "JavaScript";
console.log(`${a} ${b}`);

let x = "test-array-di-string";
console.log(x.split("-"));
