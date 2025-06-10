// * Higher-Order Functions
// adalah function yang menerima function lain sebagai argumen atau mengembalikan function lain sebagai hasil.

// high order functions
function mundur(arr, callback) {
  let hasil = [];
  for (let i = 0; i < arr.length; i++) {
    hasil.push(callback(arr[i]));
  }
  return hasil;
}

// ini adalah callback function
function kurang1(x) {
  return x - 1;
}

let angka = [10, 8, 6, 4, 2];
console.log(mundur(angka, kurang1));

// * Callback Functions
// adalah function yang dikirm sebagai argumen ke function lain dan dipanggil di dalam function tersebut
