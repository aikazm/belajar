// Destructuting Array
const perkenalan = ["Halo", "nama", "saya", "zakia"];

// const [salam, satu, dua, nama] = perkenalan;

// skipping items
// const [salam, , , nama] = perkenalan;
// console.log(nama);

// swap items
// let a = 1;
// let b = 2;

// [a, b] = [b, a];

// return value pada funcion
// function coba() {
//   return [1, 2];
// }

// const [a, b] = coba();
// console.log(a);

// Rest Parameter
// const [a, ...values] = [1, 2, 3, 4, 5];
// console.log(a);
// console.log(values);

// Destructuring Object
const mhs = {
  id: 123,
  nama: "zakia",
  umur: 23
};

// const { nama, umur } = mhs;

// Assignment tanpa deklarasi object
// ({ nama, umur } = { nama: "zakia", umur: 23 });

// console.log(nama);

// Assign ke Variabel Baru
// const { nama: n, umur: u } = mhs;
// console.log(n);

// Default Value
// const { nama, umur, email = `email@default.com` } = mhs;
// console.log(email);

// Rest Parameter
// const { nama, ...value } = mhs;
// console.log(value);

// Mengambil field pada object, setelah diirim sbg parameter u/function

function getIdMhs({ id }) {
  return id;
}

console.log(getIdMhs(mhs));
