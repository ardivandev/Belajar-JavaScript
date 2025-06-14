// * Event Handling
// konsep yang sangat penting dalam pengembangan web. Ini memungkinkan anda untuk menangkap dan merespons interaksi pengguna, seperti klik tombol, gerakan mouse, input keyboard, dan banyak lagi.

// * Event adalah sebuah tindakan atau kejadian yang terjadi di halaman web.

// * Event Listener
// mekanisme untuk menangkap event dan menjalankan fungsi tertentu ketika event tersebut terjadi
// * Cara menambahkan event listener
// - menggunakan onclick
// - mengunakan addEventListener

const text = document.getElementById("text");
function getClick() {
  text.style.backgroundColor = "blue";
  text.style.color = "white";
  text.style.padding = "20px";
}

const button = document.getElementById("submit");
button.addEventListener("click", () => {
  alert("submitted");
});

button.addEventListener("mouseout", () => {
  alert("mouseout");
});
