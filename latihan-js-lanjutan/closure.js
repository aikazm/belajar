// function init() {
//   return function(nama) {
//     console.log(nama);
//   };
// }
// let panggilNama = init();
// panggilNama("zakia");

// function ucapkanSalam(waktu) {
//   return function(nama) {
//     console.log(`Halo ${nama}, selamat ${waktu}`);
//   };
// }

// let selamatPagi = ucapkanSalam("Pagi");
// let selamatSiang = ucapkanSalam("Siang");
// let selamatMalam = ucapkanSalam("Malam");

// selamatPagi("zakia");

let add = (function() {
  let counter = 0;
  return function() {
    return ++counter;
  };
})();

console.log(add());
