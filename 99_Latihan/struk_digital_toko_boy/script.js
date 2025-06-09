let nama;
let umur;
let daftarBelanja = [];
let totalBelanja = 0;
let diskon = 0;
let totalBayar = 0;
let konfirmasi;
let tanggal = new Date();
let tahun = tanggal.getFullYear();
let bulan = tanggal.getMonth() + 1;
let hari = tanggal.getDate();
let daftarBelanjaStr = "";

nama = String(prompt("Masukkan nama:"));
umur = Number(prompt("Masukkan umur:"));

// Sapaan
alert(`Halo, ${nama}! Selamat datang di Toko Boy.`);

konfirmasi = confirm("Apakah ingin belanja?");
if (konfirmasi) {
  let jumlahItem = Number(prompt("Masukkan jumlah item:"));

  // Input Barang dan Harga User
  for (let i = 1; i <= jumlahItem; i++) {
    let namaBarang = String(prompt("Masukkan nama barang:"));
    let hargaBarang = Number(prompt("Masukkan harga barang:"));
    let obj = { nama: namaBarang, harga: hargaBarang };
    daftarBelanja.push(obj);
  }

  // Menghitung totalBelanja
  for (let i of daftarBelanja) {
    totalBelanja += i.harga;
  }

  // Gabungkan daftar belanjaan menjadi string
  for (let i of daftarBelanja) {
    daftarBelanjaStr += `- ${i.nama}: Rp.${i.harga.toLocaleString("id-ID")}\n`;
  }

  // Diskon
  diskon = totalBelanja * 0.1;

  // Total Bayar
  totalBayar = totalBelanja - diskon;

  let semuaHarga = daftarBelanja.map((item) => item.harga);
  // Barang Termahal
  let hargaTertinggi = Math.max(...semuaHarga);
  let barangTermahal = daftarBelanja.find((item) => item.harga === hargaTertinggi);

  // Barang Termurah
  let hargaTerendah = Math.min(...semuaHarga);
  let barangTermurah = daftarBelanja.find((item) => item.harga === hargaTerendah);

  // Output
  alert(
    "=== Struk Toko Boy ===\n" +
      `Tanggal: ${hari}-${bulan}-${tahun}\n` +
      `Nama: ${nama}\n` +
      `Usia: ${umur}\n\n` +
      "Daftar Belanja: " +
      daftarBelanjaStr +
      "\n\n" +
      `Total Belanja: Rp.${totalBelanja.toLocaleString("id-ID")}\n` +
      `Diskon (10%): Rp.${diskon.toLocaleString("id-ID")}\n` +
      `Total Bayar: Rp. ${totalBayar.toLocaleString("id-ID")}\n\n` +
      `Barang Termahal: ${barangTermahal.nama} (Rp${barangTermahal.harga.toLocaleString(
        "id-ID"
      )})\n` +
      `Barang Termurah: ${barangTermurah.nama} (Rp${barangTermurah.harga.toLocaleString(
        "id-ID"
      )})\n\n` +
      "Terima kasih sudah berbelanja"
  );
} else {
  alert(`Sampai jumpa, ${nama}`);
}
