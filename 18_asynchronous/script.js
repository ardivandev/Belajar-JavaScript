// TODO Asynchronous
// memungkinkan js untuk menjalankan operasi di background tanpa memblokir thread utama. Ini dilakukan dengan callbacks, Promises, dan async/await. Ketika operasi asynchronous dilakukan. JS dapat mengeksekusi operasi lain terlebih dahulu, dan setelah operasi asynchronous selesai, JS akan menangani hasil dari operasi tersebut.

// console.log("Start");
// setTimeout(() => {
//   console.log("This is asynchronous code");
// }, 2000);
// console.log("End");

// TODO Pengenalan setTimeout dan setInterval
// fungsi penting dalam Asynchronous javascript yang memungkinkan kita untuk mengatur eksekusi kode secara asynchronous dengan jeda waktu tertentu atau secara berulang. (Untuk tugas sederhana seperti penundaan dan eksekusi berulang)

// * setTimeout
/*
  Fungsinya : 
  1. Menunda eksekusi kode
  2. Membuat efek animasi atau transisi
  3. Mengatur timeout untuk operasi tertentu, seperti menunggu respon pengguna
*/

// console.log("Mulai");
// setTimeout(() => {
//   console.log("Kode ini dijeda 3 detik");
// }, 3000);
// console.log("Selesai akan muncul sebelum delay");

// * setInterval
/*
  Fungsinya :
  1. Membuat timer atau jam
  2. Menjalankan polling terhadap server
  3. Mengupdate UI secara berkala, seperti slideshow atau news ticker
*/

// let timer = 0;
// const intervalId = setInterval(() => {
//   timer += 1;
//   console.log(`Timer : ${timer} detik`);

//   // if (timer == 5) {
//   //   clearInterval(intervalId);
//   //   console.log("Timer Selesai");
//   // }
// }, 1000);

// setTimeout(() => {
//   clearInterval(intervalId);
// }, 5000);

// TODO Callback Function dan Asynchronous Callback
// Callback Function
// function selesaikanTugas(tugas, callback) {
//   console.log(`Menyelesaikan Tugas : ${tugas}`);
//   callback();
// }

// function tugasSelesai() {
//   console.log("Tugas telah selesai");
// }

// selesaikanTugas("Informatika", tugasSelesai);

// function getUserData(callback) {
//   console.log("Fetching user data...");
//   setTimeout(() => {
//     const userData = {
//       id: 1,
//       name: "Ardivan",
//       email: "ardi@gmail.com",
//     };

//     callback(null, userData);
//   }, 2000);
// }

// function displayUserData(error, userData) {
//   if (error) {
//     console.error("Error fetching user data : ", error);
//   } else {
//     console.log("User Data : ", userData);
//   }
// }

// getUserData(displayUserData);

// ! Callback Hell
// terjadi ketika kita memiliki banyak operasi asynchronous yang bergantung satu sama lain, sehingga callback dipanggil berulang kali di dalam callback sebelumnya. Ini sering kali membuat kode menjadi sulit dibaca dan dipelihara, karena indentasi yang terus bertambah. Berikut adalah contoh sederhana yang menunjukkan masalah ini.

// * Masalah : indentasi berulang, sulit dibaca dan dipelihara
// * Mengatasinya : Promises, dan Async/Await

// TODO Promises
// cara untuk menangani operasi asynchronous secara lebih bersih daripada callback. Promise adalah objek yang mewakili keberhasilan atau kegagalan suatu operasi asynchronous

// * States of Promise :
/*
  1. Pending : Promise sedang berjalan
  2. Fulfilled : Promise berhasil diselesaikan
  3. Rejected : Promise mengalami kegagalan
*/

function checkStock(product) {
  return new Promise((resolve, reject) => {
    // Simulasi mengecek stok
    setTimeout(() => {
      const stockAvailable = true;

      if (stockAvailable) {
        resolve(`${product} is available in stock`);
      } else {
        reject(`${product} is out of stock`);
      }
    }, 2000);
  });
}

// checkStock("Laptop")
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// TODO Async/Await
// sintaks modern untuk menangani operasi asynchronous secara lebih sederhana dan terlihat seperti kode synchronous, namun tetap asynchronous.

// * Async : digunakan untuk mendeklarasikan fungsi agar dapat menggunakan await
// * Await : digunakan untuk menunggu penyelesaian sebuah Promise, dan kode akan berhenti sejenak hingga promise selesai.

async function main() {
  try {
    console.log("Check in stock");
    const data = await checkStock("laptop");
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

main();
