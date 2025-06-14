// * DOM Traversal
// adalah proses menjelajahi node di DOM tree untuk menemukan elemen tertentu. Anda dapat berpindah ke elemen anak, orang tua, atau saudara menggunakan berbagai properti dan metode

// * Properti DOM Traversal
/*
- parentNode : mendapatkan element orang tua
- childNodes : mendapatkan node list dari semua anak elemen
- firstChild/lastChild
- nextSibling/previousSibling : mendapatkan elemen saudara berikutnya atau sebelumnya
*/

const item1 = document.getElementById("item1");
const item2 = document.getElementById("item2");
console.log(item1.parentNode);
console.log(item1.parentElement); // Khusus Elemen

const listItem = document.getElementById("list-item");
console.log(listItem.childNodes); // Spasi di hitung
console.log(listItem.children);
console.log(listItem.childElementCount);
console.log(listItem.firstChild); // Spasi di hitung
console.log(listItem.firstElementChild);
console.log(listItem.lastChild); // Spasi di hitung
console.log(listItem.lastElementChild);
console.log(item1.nextSibling); // Spasi di hitung
console.log(item1.nextElementSibling);
console.log(item2.previousSibling); // Spasi di hitung
console.log(item2.previousElementSibling);
