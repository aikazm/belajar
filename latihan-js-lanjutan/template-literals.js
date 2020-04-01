// 1. HTML Fragments
// const mhs = {
//   nama: "zakia",
//   umur: "23",
//   npm: "15402281",
//   email: "zakiamelia@gmail.com"
// };

// const el = `<div class="mhs">
// <h2>${mhs.nama}</h2>
// <span class="npm">${mhs.npm}</span></div>`;

// 2. Looping
// const mhs = [
//   {
//     nama: "zakia",
//     npm: "15402281"
//   },
//   {
//     nama: "surya",
//     npm: "15402281"
//   },
//   {
//     nama: "kiko",
//     npm: "15402283"
//   }
// ];

// const el = `<div class="mhs">
//     ${mhs
//       .map(
//         m => `<ul>
//         <li>${m.nama}</li>
//         <li>${m.npm}</li>
//     </ul>`
//       )
//       .join("")}
// </div>`;

// 3. Conditionals ternary
// const lagu = {
//   judul: "abc",
//   penyanyi: "zakia",
//   feat: "surya"
// };

// const el = `<div class="lagu">
// <ul>
// <li>${lagu.penyanyi}</li>
// <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ""}</li>
// </ul></div>`;

// 4. Nested
// HTML Fragments bersarang

const mhs = {
  nama: "zakia",
  semester: "3",
  matkul: ["RPL", "APSi", "SD"]
};

function cetakMataKuliah(matkul) {
  return `
    <ol>
        ${matkul.map(mk => `<li>${mk}</li>`).join("")}
    </ol>`;
}

const el = `<div class="mhs">
<h2>${mhs.nama}</h2>
<span class="semester">${mhs.semester}</span>
<h4>Mata Kuliah :</h4>
${cetakMataKuliah(mhs.matkul)}</div>;`;

document.body.innerHTML = el;
