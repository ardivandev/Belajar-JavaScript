// * DOM
// DOM adalah representasi struktur dokumen HTML atau XML dalam bentuk tree (pohon yang memungkinkan program untuk mengakses dan memanipulasi konten, struktur, dan gaya halaman web yang dinamis)

// * Node : Setipa elemen dalam tree DOM disebut "node". Ada beberapa jenis node, termasuk elemen, teks, dan atribut.

// * Root Node : Dokumen HTML dimulai dari node akar (document), yang merupakan entry point untuk mengakses semua elemen lain di halaman.

console.log(document.querySelectorAll("li"));
let list = document.querySelectorAll("li");
list[0].style.color = "red";
