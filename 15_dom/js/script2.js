// * Memanipulasi ELemen

// TODO Mengubah Konten:
// element.textContent atau element.innerHTML
// TODO Mengubah Atribut:
// element.setAttribute(attribute, value)
// TODO Menubah Gaya:
// elemenet.style.property = value

const p = document.getElementById("paragraf");
p.textContent = "Paragraf Berubah"; // ini content saja yang bisa dirubah
p.innerHTML = "<h1>Hello World</h1>"; // ini dengan tag nya juga bisa dirubah

const container = document.getElementById("container");
console.log(container.innerHTML);
console.log(container.textContent);

container.setAttribute("class", "bg-red");

const title = document.getElementById("title");
title.style.textTransform = "uppercase";
