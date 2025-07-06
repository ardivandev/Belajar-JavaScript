// TODO ES6 Classes
// Class adalah blueprint untuk membuat objek
// Constuctor adalah method khusus untuk menginisialisasi objek baru

class Mobil {
  constructor(merk, model, tahun) {
    this.merk = merk;
    this.model = model;
    this.tahun = tahun;
  }

  start() {
    return "Mobil dimulai";
  }

  info() {
    return `Mobil : ${this.merk} ${this.model}, Tahun : ${this.tahun}`;
  }
}

let mobil1 = new Mobil("Toyota", "Avanza", 2021);
console.log(mobil1.info());
