const nama = prompt("Masukkan nama:");
let usia = parseInt(prompt("Masukkan usia:"));

// Sapaan
alert(`Halo, ${nama}! Kamu berusia ${usia} tahun.`);

// Kondisi
if (usia < 13) {
  alert("Kamu masih anak-anak");
} else if (usia >= 13 && usia <= 19) {
  alert("Kamu remaja");
} else if (usia >= 20 && usia <= 59) {
  alert("Kamu dewasa");
} else {
  alert("Kamu sudah lanjut usia");
}

let arrAngka = [];
let jumlahNilai = 0;
let rataRata = 0;
let nilaiTertinggi = 0;
let nilaiTerendah = 0;

let confirmAngkaFavorit = confirm("Apakah kamu ingin memasukkan 3 angka favoritmu?");
if (confirmAngkaFavorit) {
  for (let i = 1; i <= 3; i++) {
    let angka = parseInt(prompt(`Masukkan angka ke-${i}`));
    arrAngka.push(angka);
  }

  for (let i of arrAngka) {
    jumlahNilai += i;
  }

  rataRata = jumlahNilai / 3;
  nilaiTertinggi = Math.max(...arrAngka);
  nilaiTerendah = Math.min(...arrAngka);

  alert(
    `Rata - Rata : ${rataRata}\n
    Nilai tertinggi : ${nilaiTertinggi}\n
    Nilai terendah : ${nilaiTerendah}`
  );
} else {
  alert("Baiklah, mungkin lain kali");
}
