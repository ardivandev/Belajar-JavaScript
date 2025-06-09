let diskon = 0;
let totalBelanja = 0;
let arrHarga = [];

let nama = String(prompt("Masukkan nama:"));
let usia = Number(prompt("Masukkan usia:"));
alert(`Halo, ${nama}! Selamat datang di Toko Boy`);
let confirmasi = confirm("Apakah kamu ingin memasukkan daftar belanjaan?");

if (confirmasi) {
  let jumlahItem = Number(prompt("Masukkan jumlah item:"));
  for (let i = 1; i <= jumlahItem; i++) {
    let item = Number(prompt(`Masukkan harga barang ke-${i}`));
    arrHarga.push(item);
  }
  for (let i of arrHarga) {
    totalBelanja += i;
  }

  if (usia < 18) {
    diskon = totalBelanja * 0.1;
  } else if (usia >= 18 && usia < 60) {
    diskon = 0;
  } else {
    diskon = totalBelanja * 0.2;
  }

  alert(
    `Total belanja sebelum diskon: Rp.${totalBelanja}\n
    Diskon: Rp.${diskon}\n
    Total yang harus dibayar: Rp.${totalBelanja - diskon}`
  );
} else {
  alert("Oke, sampai jumpa di Toko Boy");
}
