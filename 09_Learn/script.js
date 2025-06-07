// TODO : Game Suit Jawa

let tanya = true;
while (tanya) {
  // Menangkap pilihan player
  let p = prompt("pilih : gajah, semut, orang");

  // Menangkap pilihan computer
  // Membangkitkan bilangan random
  let comp = Math.random(); // 0 - 1

  if (comp < 0.34) {
    comp = "gajah";
  } else if (comp >= 0.34 && comp < 0.67) {
    comp = "orang";
  } else {
    comp = "semut";
  }

  let hasil = "";
  // Menentukan rules
  if (p == comp) {
    hasil = "SERI";
  } else if (p == "gajah") {
    hasil = comp == "orang" ? "MENANG" : "KALAH";
  } else if (p == "orang") {
    hasil = comp == "gajah" ? "KALAH" : "MENANG";
  } else if (p == "semut") {
    hasil = comp == "orang" ? "KALAH" : "MENANG";
  } else {
    hasil = "memasukkan pilihan yang salah";
  }

  // Tampilkan hasilnya
  alert(`Kamu memilih ${p} dan komputer memilih ${comp}\nmaka hasilnya adalah ${hasil} `);

  tanya = confirm("lagi?");
}

alert("Terima kasih sudah bermain");
