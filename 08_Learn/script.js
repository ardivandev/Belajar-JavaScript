// * Segitiga Siku-Siku (kiri bawah)
let segitigaSikuSiku = "";
for (let i = 0; i < 5; i++) {
  // Menambahkan bintang sebanyak nilai i+1
  for (let j = 0; j <= i; j++) {
    segitigaSikuSiku += "*";
  }
  segitigaSikuSiku += "\n"; // Pindah baris
}
console.log(segitigaSikuSiku);

// * Segitiga Terbalik (kiri atas)
let segitigaTerbalik = "";
for (let i = 5; i > 0; i--) {
  // Menambahkan bintang sebanyak nilai i
  for (let j = 0; j < i; j++) {
    segitigaTerbalik += "*";
  }
  segitigaTerbalik += "\n"; // Pindah baris
}
console.log(segitigaTerbalik);

// * Segitiga Siku - Siku dari Kanan (kanan bawah)
let segitigaSikuSikuKanan = "";
for (let i = 1; i <= 5; i++) {
  // Menambahkan spasi sebanyak (5 - i)
  for (let j = 0; j < 5 - i; j++) {
    segitigaSikuSikuKanan += " ";
  }
  // Menambahkan bintang sebanyak i
  for (let k = 0; k < i; k++) {
    segitigaSikuSikuKanan += "*";
  }
  segitigaSikuSikuKanan += "\n"; // Pindah baris
}
console.log(segitigaSikuSikuKanan);

// * Segitiga Siku - Siku Terbalik dari kanan (kanan atas)
let segitigaTerbalikKanan = "";
for (let i = 0; i < 5; i++) {
  // Menambahkan spasi sebanyak i
  for (let j = 0; j < i; j++) {
    segitigaTerbalikKanan += " ";
  }
  // Menambahkan bintang sebanyak (5 - i)
  for (let k = 0; k < 5 - i; k++) {
    segitigaTerbalikKanan += "*";
  }
  segitigaTerbalikKanan += "\n"; // Pindah baris
}
console.log(segitigaTerbalikKanan);

// * Segitiga Sama Kaki
let segitigaSamaKaki = "";
for (let i = 1; i <= 5; i++) {
  // Spasi di sebelah kiri sebanyak (5 - i)
  for (let j = 0; j < 5 - i; j++) {
    segitigaSamaKaki += " ";
  }
  // Bintang sebanyak (2 * i - 1)
  for (let k = 0; k < 2 * i - 1; k++) {
    segitigaSamaKaki += "*";
  }
  segitigaSamaKaki += "\n"; // Pindah baris
}
console.log(segitigaSamaKaki);

// * Segitiga Pascal
let tinggiPascal = 5;
let segitigaPascal = "";
for (let i = 0; i < tinggiPascal; i++) {
  let angka = 1;
  // Tambahkan spasi di awal untuk rata tengah
  for (let j = 0; j < tinggiPascal - i; j++) {
    segitigaPascal += " ";
  }
  for (let j = 0; j <= i; j++) {
    segitigaPascal += angka + " ";
    // Hitung angka berikutnya dalam baris Pascal
    angka = (angka * (i - j)) / (j + 1);
  }
  segitigaPascal += "\n"; // Pindah baris
}
console.log(segitigaPascal);

// * Belah Ketupat
let belahKetupat = "";
let tinggi = 5;

// Bagian atas
for (let i = 1; i <= tinggi; i++) {
  for (let j = 0; j < tinggi - i; j++) {
    belahKetupat += " ";
  }
  for (let k = 0; k < 2 * i - 1; k++) {
    belahKetupat += "*";
  }
  belahKetupat += "\n";
}

// Bagian bawah
for (let i = tinggi - 1; i >= 1; i--) {
  for (let j = 0; j < tinggi - i; j++) {
    belahKetupat += " ";
  }
  for (let k = 0; k < 2 * i - 1; k++) {
    belahKetupat += "*";
  }
  belahKetupat += "\n";
}
console.log(belahKetupat);
