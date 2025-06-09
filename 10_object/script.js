// * Object
// tipe data yang digunakan untuk menyimpan koleksi data dan entitas yang lebih kompleks

// * Membuat Object
// literal
let mobil = {
  merk: "Toyota",
  model: "Avanza",
  tahun: "2014",
};
console.log(mobil);

// constructor new Object()
let buku = new Object();
buku.judul = "Learn Javascript";
buku.tahun = 2020;
console.log(buku);

// * Mengakses Properti Object
let mahasiswa = {
  nama: "Ardivan",
  umur: 17,
  jurusan: "Rekayasa Perangkat Lunak",
};

// Menggunakan notasi titik
console.log(mahasiswa.nama);

// menggunakan notasi kurung
console.log(mahasiswa["jurusan"]);

// * Menambah dan Mengubah Properti
// menambah properti
mahasiswa.alamat = "Kp. Nagasuka";
console.log(mahasiswa);

// mengubah properti
mahasiswa.nama = "Boy";
console.log(mahasiswa);

// * Menghapus properti
delete mahasiswa.alamat;
console.log(mahasiswa);

// * Nested Object
let universitas = {
  nama: "ITB",
  fakultas: {
    nama: "Fakultas teknik industri",
    jurusan: "Teknik Fisika",
  },
};
console.log(universitas["fakultas"]["nama"]);

// * Destructuring Object
let { nama, umur, jurusan } = mahasiswa;
console.log(nama, umur, jurusan);

// * Jawaban Tugas
/*
1. B
2. A
3. B
4. B
5. B
*/
