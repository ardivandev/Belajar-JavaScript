// Pembuka
alert("Welcome to game\nRulus : pilih angka 1 - 10");

let mainlagi = true;

do {
  // pilihan comp
  let comp = Math.floor(Math.random() * 10 + 1);
  let tebakanBenar = false;

  while (!tebakanBenar) {
    // input Player
    let p = parseInt(prompt("Masukkan angka 1 - 10"));

    // kondisi
    if (p > comp) {
      alert(`Angka ${p} terlalu besar`);
    } else if (p < comp) {
      alert(`Angka ${p} terlalu kecil`);
    } else if (p === comp) {
      alert(`Angka ${p} adalah benar`);
      tebakanBenar = true;
    } else {
      alert("Masukkan angka yang benar");
      continue;
    }
  }

  mainlagi = confirm("Main Lagi?");
} while (mainlagi);
