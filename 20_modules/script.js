// Modules adalah fitur yang memungkinkan kita untuk membagi kode js ke dalam file terpisah. Ini membuat kode lebih terstruktur, lebih mudah untuk dipelihara, dan meningkatkan keterbacaan. Dengan modules, anda dapat mengelompokkan fungsionalitas tertentu dalam file yang terpisah, dan kemudian mengimpor file tersebut sesuai kebutuhan.

// ? Why to use modules ?
/*
  1. Pemeliharaan yang lebih mudah
  2. Penggunaan ulang code
  3. Meningkatkan kejelasan
*/

// * Tipe Module JS
/*
  1. ES Modules : menggunakan sintaks import dan export.
  2. CommonJS Modules : digunakan dalam lingkungan Node.js Menggunakan require dan module.exports.
*/

// TODO ES Modules
// gunakan export untuk mengekspor fungsi, variabelm atau objek dari suatu file, yang kemudian dapat diimpor oleh file lain. Setelah anda mengekspor, anda dapat mengimpor nilai tersebut ke file lain.

import { add, substract } from "./math.js";
import greet from "./greet.js";

console.log(add(5, 3));
console.log(substract(5, 2));
greet("Ardivan");
