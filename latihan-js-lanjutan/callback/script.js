// Callback
// Synchronus Callback

// function halo(nama) {
//   alert(`Halo, ${nama}`);
// }

// function tampilkanPesan(callback) {
//   const nama = prompt("Masukan Nama: ");
//   callback(nama);
// }

// tampilkanPesan(nama => alert(`Halo ${nama}`));

// const mhs = [
//   {
//     nama: "sepatu",
//     harga: 2000,
//     idType: 1
//   },
//   {
//     nama: "jaket",
//     harga: 1000,
//     idType: 1
//   },
//   {
//     nama: "Moisturizer",
//     hobi: 2500,
//     idType: 2
//   }
// ];

// console.log("mulai");
// mhs.forEach(b => {
//   for (let i = 0; i < 1000000; i++) {
//     let date = new Date();
//   }
//   console.log(b.nama);
// });
// console.log("selesai");

// Asynchronus Callback
// function getDataBarang(url, success, error) {
//   let xhr = new XMLHttpRequest();

//   xhr.onreadystatechange = function() {
//     if (xhr.readyState === 4) {
//       if (xhr.status === 200) {
//         success(xhr.response);
//       } else if (xhr.status === 404) {
//         error();
//       }
//     }
//   };

//   xhr.open("get", url);
//   xhr.send();
// }

// console.log("mulai");

// getDataBarang(
//   "barang.json",
//   results => {
//     // console.log(JSON.parse(results));
//     const brg = JSON.parse(results);
//     brg.forEach(b => console.log(b.nama));
//   },
//   () => {}
// );

// console.log("selesai");

// JQuery
console.log("mulai");
$.ajax({
  url: "barang.json",
  success: brg => {
    brg.forEach(b => console.log(b.nama));
  },
  error: e => {
    console.log(e.responseText);
  }
});
console.log("selesai");
