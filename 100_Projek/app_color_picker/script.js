const inputColor = document.getElementById("inputcolor").addEventListener("input", (event) => {
  console.log(event);
  let selectedColor = event.target.value;

  // update the color text
  document.getElementById("outputhexacolor").textContent = selectedColor;

  // Update the background color
  document.getElementById("outputcolor").style.backgroundColor = selectedColor;
});
