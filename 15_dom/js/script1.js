// * Mengakses DOM
/*
- getElementById = berdasarkan ID
- getElemenetsByClassName = berdasarkan class
- getElementsByTagName = berdasarkan tag
- querySelector = menggunakan selector CSS 
- querySelectorAll akses semua yang sesuai dengan selector CSS
*/

const title = document.getElementById("title");
console.log(title);
const text = document.getElementsByClassName("text");
console.log(text); // HtmlCollection
const el = document.getElementsByTagName("li");
console.log(el); // HtmlCollenction

console.log(document.querySelector("li.text"));
console.log(document.querySelectorAll("li#text2")); // NodeList
