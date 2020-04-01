// Spread Operator
// memecah iterables menjadi single element

// const mhs = ["zakia", "kia", "jek"];
// console.log(...mhs[0]);

// Menggabungkan 2 array

// const mhs = ["zakia", "kia", "jek"];
// const dosen = ["surya", "muhammad", "asriadie"];
// const orang = [...mhs, ...dosen];
// console.log(orang);

// const mhs1 = [...mhs];
// mhs1[0] = "zaki";
// console.log(mhs1);

// const liMhs = document.querySelectorAll("li");
// const mhs = [...liMhs].map(m => m.textContent);
// console.log(mhs);

const nama = document.querySelector(".nama");
const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join("");
nama.innerHTML = huruf;
