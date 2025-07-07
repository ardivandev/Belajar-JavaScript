// ? What is API ?
// api (Apllication Programming Interface) memungkinkan pengembang untuk mengakses data atau layanan dari aplikasi lain tanpa perlu memahami bagaimana aplikasi tersebut bekerja di dalamnya. API menyediakan cara untuk melakukan hal-hal seperti :

/*
  1. Mengambil data dari server
  2. Mengirim data ke server
  3. Mengautentikasi pengguna
  4. Mengakses layanan pihak ketika (Google Maps, OpenWeather, dsb)
*/

// * API
/*
  - REST API (Representational State Transfer) : API berbasis HTTP yang digunakan untuk berkomunikasi antara klien dan server
  - JSON (Javascript Object Natation) : Format data yang sering digunakan dalam komunikasi API
*/

// TODO HTTP Request Methods
// API biasanya bekerja melalui HTTP dengan beberapa metode standar, yaitu :
/*
  1. GET : Mengambil data dari server
  2. POST : Mengirim data baru ke server
  3. PUT : Mengganti atau memperbarui data di server
  4. DELETE : Menghapus data dari server
*/

// TODO HTTP Status Code
// Setiap kali kita mengirimkan permintaan HTTP, kita akan menerima kode status sebagai respon, seperti :
/*
  1. 200 OK : Perminataan berhasil
  2. 201 Created : Sumber daya berhasil dibuat
  3. 400 Bad Request : Perminataan tidak valid
  4. 404 Not Found : Sumber daya tidak ditemukan
  5. 500 Internal Server Error : Server mengalami kesalahan
*/

// TODO fetch() API
// cara modern dan lebih sederhana untuk mengirim permintaan HTTP ke serve dan bekerja dengan API. fetch() adalah promise-based, sehingga lebih mudah dikelola.

// * Untuk ambil data
// fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Network response not ok");
//     }
//     console.log(response);
//     return response.json();
//   })
//   .then((data) => {
//     console.log("Data : ", data);
//   })
//   .catch((err) => {
//     console.error("Error : ", err.message);
//   });

// * Untuk post data
const newData = {
  title: "New Post",
  body: "This is the body of the new post",
  userId: 1,
};

// fetch("https://jsonplaceholder.typicode.com/posts", {
// method: "POST",
// headers: {
//   "Content-type": "application/json",
// },
// body: JSON.stringify(postData),
// })
//   .then((response) => {
//     console.log(response);
//     return response.json();
//   })
//   .then((data) => {
//     console.log("Data posted : ", data);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// * Menggunakan async/await dengan fetch()
// async function getPost() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     const data = await response.json();
//     console.log("Data fetched using async/await : ", data);
//   } catch (err) {
//     console.error("Error fetching data : ", err);
//   }
// }

// Create a new data
// async function postData(newData) {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
//       method: "POST",
//       headers: {
//         "Content-type": "application/json",
//       },
//       body: JSON.stringify(newData),
//     });
//     const data = await response.json();
//     console.log("new Data : ", data);
//   } catch (err) {
//     console.error("Error : ", err);
//   }
// }

// getPost();
// postData(newData);

// * Pakek library Axios
axios
  .get("https://jsonplaceholder.typicode.com/posts/1")
  .then((result) => {
    console.log(result.data);
  })
  .catch((err) => {
    console.log(err);
  });

axios
  .post("https://jsonplaceholder.typicode.com/posts/", {
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(newData),
  })
  .then((result) => {
    console.log(result.data);
  })
  .catch((err) => {
    console.error(err);
  });
