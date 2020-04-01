// 1. Object Literal
// let mahasiswa = {
//   nama: "zakia",
//   energi: 10,
//   makan: function(porsi) {
//     this.energi = this.energi + porsi;
//     console.log(`Selamat makan ${this.nama} `);
//   }
// };

// 2. Function Declaration
// const methodMahasiswa = {
//   makan: function(porsi) {
//     this.energi += porsi;
//     console.log(`Halo ${this.nama}, selamat makan`);
//   },
//   main: function(jam) {
//     this.energi -= jam;
//     console.log(`Halo ${this.nama}, selamat main`);
//   }
// };
// function Mahasiswa(nama, energi) {
//   let mahasiswa = Object.create(methodMahasiswa);
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;

//   return mahasiswa;
// }

// function Mahasiswa(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;
// }

// Mahasiswa.prototype.makan = function(porsi) {
//   this.energi += porsi;
//   return `Halo ${nama} selamat makan`;
// };

// Mahasiswa.prototype.main = function(jam) {
//   this.main -= jam;
//   return `Halo ${nama} selamat main`;
// };

// let zakia = new Mahasiswa("zakia", 10);

// versi Class
class Mahasiswa {
  constructor(nama, energi) {
    this.nama = nama;
    this.energi = energi;
  }

  makan(porsi) {
    this.energi += porsi;
    return `Halo ${this.nama} selamat makan`;
  }
}

let zakia = new Mahasiswa("zakia", 10);

// 3. Construtor Function
// function Mahasiswa(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;

//   this.makan = function(porsi) {
//     this.energi += porsi;
//     console.log(`Halo ${this.nama}, selamat makan`);
//   };

//   this.main = function(jam) {
//     this.main = energi;
//     console.log(`Halo ${this.nama}, selamat main`);
//   };
// }

// let zakia = new Mahasiswa("Zakia", 10);
