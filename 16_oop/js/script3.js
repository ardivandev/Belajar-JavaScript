// TODO Encapsulation
// konsep untuk membatasi akses ke properti dan method dari objek. Javascript mengimplementasikan ini dengan penggunaan simbol underscore _ atau menggunakan closures

// Penggunaan _balance mengindikasikan bahwa properti ini "pribadi", meskipun masih bisa diakses (JS tidak mendukung encapsulation private secara ketat di ES6)

// Secara ketat
// private fields #

class BankAccount {
  #balance;
  constructor(owner, balance) {
    this.owner = owner;
    this.#balance = balance;
  }

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return `Saldo : ${this.#balance}`;
  }
}

let akunArdi = new BankAccount("Ardi", 1000);
akunArdi.deposit(2000);
console.log(akunArdi.getBalance());
