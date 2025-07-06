// TODO OOP
// OOP adalah paradigma pemrograman yang berfokus pada penggunaan "objek" untuk mewakili data dan fungsionalitas dalam program.

// ? How to create object
let mobil = {
  // This is properti
  merk: "Toyota",
  model: "Avanza",
  tahun: 2021,

  // This is metode
  start: function () {
    return "Mobil dimulai";
  },
  info: function () {
    return `Mobil : ${this.merk} ${this.model}`;
  },
};

// ? How to access property in object
// console.log(mobil.start());

// * Contructor Function
// TODO Blueprint dari object
function Motor(merk, model, tahun) {
  this.merk = merk;
  this.model = model;
  this.tahun = tahun;

  this.start = function () {
    return "Motor dimulai";
  };

  this.info = function () {
    return `Motor : ${this.merk} ${this.model}`;
  };
}

let motor1 = new Motor("CBR", "Sport", 2020);
let motor2 = new Motor("XSR", "Custom", 2022);
// console.log(motor1);
// console.log(motor2);

// * Konsep Prototyper Inheritance
// Javascript menggunakan prototypal inheritance, yang berarti objet dapat mewarisi properti dan method dari objek lain.
// Prototype adalah objek dari mana objek lain mewarisi properti dan method

function Hewan(nama, jenis) {
  this.nama = nama;
  this.jenis = jenis;
}

Hewan.prototype.makan = function () {
  return `${this.nama} sedang makan`;
};

let kucing = new Hewan("Sora", "Anggora");
console.log(kucing.makan());
