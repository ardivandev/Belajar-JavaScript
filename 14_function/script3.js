// * IIFE (Immediately Invoked Function Expression)
// function yang dipanggil langsung setelah dibuat, ini berguna untuk mengisolasi variabel dan mencegahnya menggangu kode lain.

(function () {
  console.log(`Halo, IIFE dipanggil`);
})();

const appConfig = (function () {
  const apiKey = "1234";
  const apiURL = "https://api.example.com";

  return {
    getApiKey: function () {
      return apiKey;
    },
    getApiURL: function () {
      return apiURL;
    },
  };
})();
console.log(appConfig.getApiKey());
console.log(appConfig.getApiURL());
