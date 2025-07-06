// TODO Inheritance dengan Class
// memungkinkan anda membuat class baru yang mewarisi properti dan method dari class lain
// extends digunakan untuk membuat subclass
// super memanggil constructor dari class induk

class Hewan {
  constructor(nama, jenis) {
    this.nama = nama;
    this.jenis = jenis;
  }

  makan() {
    return `${this.nama} sedang makan`;
  }
}

class Kucing extends Hewan {
  constructor(nama, jenis, warna) {
    super(nama, jenis);
    this.warna = warna;
  }

  suara() {
    return "Meooww!!";
  }
}

let kucing = new Kucing("Sora", "Anggora", "Grey");
console.log(kucing.makan());
console.log(kucing);
console.log(kucing.suara());
