// Destructuring

// function kalkulasi(a, b) {
//   return [a + b, a - b, a*b, a/b];
// }

// const jumlah = kalkulasi(2, 3)[0];
// const kali = kalkulasi(2, 3)[1];
// console.log(kali);

// const [jumlah, kali] = kalkulasi(2, 3);
// console.log(jumlah);
// console.log(kali);

// const [tambah, kurang, kali, bagi ='tidak ada'] = kalkulasi(2, 3);
// console.log(bagi);

// function kalulasi(a, b) {
//   return {
//     tambah: a + b,
//     kurang: a - b,
//     kali: a * b,
//     bagi: a / b
//   };
// }

// const { bagi, kali, tambah, kurang } = kalkulasi(2, 3);
// console.log(kurang);

// Destructuring Function Argument

const mhs1 = {
  nama: "zakia",
  umur: 23,
  nilai: {
    tugas: 80,
    uts: 90,
    uas: 100
  }
};

// function cetakMhs(mhs) {
//   return `Halo nama saya ${mhs1.nama}, umur saya ${mhs1.umur} tahun.`;
// }

// console.log(cetakMhs(mhs1));

function cetakMhs({ nama, umur, nilai: { tugas, uts, uas } }) {
  return `Halo nama saya ${nama}, umur saya ${umur} tahun. Nilai uas saya ${uas}`;
}

console.log(cetakMhs(mhs1));
