alert("Selamat Datang Di Cek Angka");
let angka = parseInt(prompt("Masukkan angka:"));

if (angka > 0) {
  let cekGanjilGenap = angka % 2 === 0 ? "bilangan genap" : "bilangan ganjil";
  alert(`${angka} adalah bilangan positif dan ${cekGanjilGenap}.`);
} else if (angka < 0) {
  let cekGanjilGenap = angka % 2 === 0 ? "bilangan genap" : "bilangan ganjil";
  alert(`${angka} adalah bilangan negatif dan ${cekGanjilGenap}.`);
} else if (angka === 0) {
  alert(`${angka} adalah bilangan nol.`);
} else {
  alert("masukkan angka");
}
