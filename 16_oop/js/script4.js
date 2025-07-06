// TODO Polymorphism
// memungkinkan untuk menggunakan method dengan nama yang sama pada objek yang berbeda

class Hewan {
  bersuara() {
    console.log("Hewan Bersuara");
  }
}

class Kucing extends Hewan {
  bersuara() {
    console.log("Meooww!");
  }
}

class Sapi extends Hewan {
  bersuara() {
    console.log("Mooo!!");
  }
}

let hewan = new Hewan();
let kucing = new Kucing();
let sapi = new Sapi();

hewan.bersuara();
kucing.bersuara();
sapi.bersuara();
