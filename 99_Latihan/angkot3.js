let noAngkot = 1;
let jumlahAngkot = 10;
let angkotBeroperasi = 6;

for (let i = noAngkot; i <= jumlahAngkot; i++) {
  if (i <= angkotBeroperasi) {
    console.log(`Angkot No. ${i} beroperasi dengan baik`);
  } else {
    console.log(`Angkot No. ${i} tidak beroperasi dengan baik`);
  }
}
