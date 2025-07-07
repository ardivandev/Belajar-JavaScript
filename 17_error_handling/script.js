let number = 1234;
// console.log(num);

try {
  if (number == 123) {
    throw new Error("Nomor 123 tidak diperbolehkan");
  }
  console.log(number);
} catch (error) {
  // console.log(error);
  console.log(error.name);
  console.log(`Error tejadi : ${error.message}`);
} finally {
  console.log("Ini akan selalu dijalankan");
}

// Throw (Melempar Error)

function divide(a, b) {
  if (b == 0) {
    throw new Error("Pembagian dengan 0 tidak diperbolehkan");
  }
  return a / b;
}

try {
  let result = divide(10, 0);
  console.log(result);
} catch (error) {
  console.error(error.message);
}

// Class Custom Error
let num = 123;

class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "Custom Error";
  }
}

try {
  if (num === 123) {
    throw new CustomError("Num tidak boleh bernilai 123");
  }
} catch (err) {
  console.error(`Error : (${err.name}) ${err.message}`);
}
