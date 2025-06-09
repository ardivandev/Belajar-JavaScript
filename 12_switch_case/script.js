// * Switch - Case
// digunakan untuk membuat keputusan berdasarkan nilai yang cocok dengan berbagai kasus.

let hari = "Senin";
switch (hari) {
  case "Senin":
    console.log("Hari Senin");
    break;
  case "Selasa":
    console.log("Hari Selasa");
    break;
  case "Sabtu":
  case "Minggu":
    console.log("Hari Libur");
    break;
  default:
    console.log("Masukkan nama hari yang benar");
    break;
}

// * Jawaban Tugas
/*
1. B
2. C
3. B
*/

let noBulan = 1;
switch (noBulan) {
  case 1:
    console.log("Januari");
    break;
  case 2:
    console.log("Februari");
    break;
  case 3:
    console.log("Maret");
    break;
  case 4:
    console.log("April");
    break;
  case 5:
    console.log("Mei");
    break;
  case 6:
    console.log("Juni");
    break;
  case 7:
    console.log("Juli");
    break;
  case 8:
    console.log("Agustus");
    break;
  case 9:
    console.log("September");
    break;
  case 10:
    console.log("Oktober");
    break;
  case 11:
    console.log("November");
    break;
  case 12:
    console.log("Desember");
    break;
  default:
    console.log("Masukkan nomor bulan");
    break;
}
