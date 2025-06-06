let noAngkot = 1;
let jumlahAngkot = 10;
let angkotBeroperasi = 6;

for (let i = noAngkot; i <= jumlahAngkot; i++) {
  if (i <= angkotBeroperasi) {
    console.log(`Angkot No. ${i} beroperasi dengan baik`);
  } else if (i === 8 || i === 10) {
    console.log(`Angkot No. ${i} sedang lembur`);
  } else {
    console.log(`Angkot No. ${i} tidak beroperasi dengan baik`);
  }
}
