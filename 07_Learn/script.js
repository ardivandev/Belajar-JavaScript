// TODO : Pengkondisian

// * IF
let angka = 1;
if (angka === 1) {
  alert("Kamu memasukkan angka 1");
}

// * IF ELSE
if (angka === 2) {
  alert("Kamu memasukkan angka 2");
} else {
  alert("Kamu memasukkan selain 2");
}

// * IF ELSE IF
if (angka === 3) {
  alert("Kamu memasukkan angka 3");
} else if (angka === 4) {
  alert("Kamu memasukkan angka 4");
} else {
  alert("Kamu memasukkan angka selain 3 dan 4");
}

// * SWITCH
let hari = "Senin";
switch (hari) {
  case "Senin":
    console.log("Hari ini adalah hari senin");
    break;
  case "Sabtu":
  case "Minggu":
    console.log("Hari libur");
    break;
  default:
    console.log("Bukan nama hari");
    break;
}
