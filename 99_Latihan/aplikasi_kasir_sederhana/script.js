// * Aplikasi Kasir Sederhana

let nama;
let tanggal;
let namaBarang = [];
let hargaBarang = [];
let totalBelanja = 0;
let diskon = 0;
let totalYangHarusDibayar;

nama = prompt("Masukkan nama:");
tanggal = new Date();

let namaBarang1 = prompt("Masukkan nama barang pertama:");
let hargaBarang1 = parseInt(prompt("Masukkan harga barang pertama:"));
namaBarang.push(namaBarang1);
hargaBarang.push(hargaBarang1);

let namaBarang2 = prompt("Masukkan nama barang kedua:");
let hargaBarang2 = parseInt(prompt("Masukkan harga barang kedua:"));
namaBarang.push(namaBarang2);
hargaBarang.push(hargaBarang2);

let namaBarang3 = prompt("Masukkan nama barang ketiga:");
let hargaBarang3 = parseInt(prompt("Masukkan harga barang ketiga:"));
namaBarang.push(namaBarang3);
hargaBarang.push(hargaBarang3);

totalBelanja = hargaBarang[0] + hargaBarang[1] + hargaBarang[2];
if (totalBelanja > 100000) {
  diskon = totalBelanja * 0.1;
}

totalYangHarusDibayar = totalBelanja - diskon;

alert(
  `Halo, ${nama}\nTanggal pembelian: ${tanggal}\n\nDaftar belanja: \n1. ${namaBarang[0]} - ${hargaBarang[0]}\n2. ${namaBarang[1]} - ${hargaBarang[1]}\n3. ${namaBarang[2]} - ${hargaBarang[2]}\n\nTotal belanja: Rp.${totalBelanja}\nDiskon: Rp.${diskon}\nTotal yang harus dibayar: Rp.${totalYangHarusDibayar}\n\nTerima kasih telah berbelanja`
);

// 1. Buku - Rp25000
// 2. Pulpen - Rp5000
// 3. Tas - Rp85000
