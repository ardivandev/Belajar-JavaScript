// * Menambahkan dan Menghapus Elemen Dom
// * Menambahkan
/*
- createElement(tagName) : Membuat elemen baru
- appendChild(childNode) : Menambahkan elemen sebagao anak dari elemen lain
- insertBefore(newNode, referenceNode) : Menyisipkan elemen sebeleum elemen referensi
*/

// * Menghapus
/*
- removeChild(childNode) : Menghapus elemen anak
- remove() : Menghapus elemen secara langsung
*/

const newDiv = document.createElement("div");
const title = document.getElementById("title");
newDiv.innerHTML = "<h3>Ini div dibuat dari script</h3>";
// document.body.appendChild(newDiv);
document.body.insertBefore(newDiv, title);

const parents = document.getElementById("list");
const newLi = document.createElement("li");
const item2 = document.getElementById("item2");
newLi.textContent = "new li";
// parents.appendChild(newLi);
parents.insertBefore(newLi, item2);
// document.body.removeChild(title);
title.remove();
// document.body.remove();
