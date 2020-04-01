// Constructor Function
// const Mahasiswa = function() {
//   this.nama = "zakia";
//   this.umur = 23;
//   this.sayHello = function() {
//     console.log(`Halo nama saya ${this.nama} umur saya ${umur}`);
//   };
// };

// const zakia = new Mahasiswa();

// const Mahasiswa = function() {
//   this.nama = "zakia";
//   this.umur = 23;
//   this.sayHello = () => {
//     console.log(`Halo nama saya ${this.nama} umur saya ${umur}`);
//   };
// };

// const zakia = new Mahasiswa();

// Object Literal

const box = document.querySelector(".box");
box.addEventListener("click", function() {
  let satu = "size";
  let dua = "caption";

  if (this.classList.contains(satu)) {
    [satu, dua] = [dua, satu];
  }
  this.classList.toggle("size");
  setTimeout(() => {
    this.classList.toggle("caption");
  }, 600);
});
