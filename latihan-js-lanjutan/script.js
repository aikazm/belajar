// fetch("http://www.omdbapi.com/?apikey=44254820&s=narnia")
//   .then(response => response.json())
//   .then(response => console.log(response));

// contoh 1
// let ditepati = true;
// const janji1 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     resolve("janji di tepati");
//   } else {
//     reject("ingkar janji");
//   }
// });

// janji1
//   .then(response => console.log("ok : " + response))
//   .catch(response => console("not ok : " + response));

// contoh 2
// let ditepati = true;
// const janji2 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     setTimeout(() => {
//       resolve("Ditepati setelah beberapa waktu");
//     }, 2000);
//   } else {
//     setTimeout(() => {
//       resolve("Tidak ditepati setelah beberapa waktu");
//     }, 2000);
//   }
// });

// console.log("mulai");
// console.log(janji2.then(() => console.log(janji2)));
// janji2
//   .finally(() => console.log("selesai menunggu "))
//   .then(response => console.log("OK:" + response))
//   .catch(response => console.log("not ok: " + response));
// console.log("selesai");

// Promise.all()

const film = new Promise(resolve => {
  setTimeout(() => {
    resolve([
      {
        judul: "Twilight zone",
        sutradara: "jek",
        pemeran: "tamtam"
      }
    ]);
  }, 1000);
});

const cuaca = new Promise(resolve => {
  setTimeout(() => {
    resolve([
      {
        kota: "jakarta",
        temp: 32,
        kondisi: "Hujan"
      }
    ]);
  }, 500);
});

// film.then(response => console.log(response));
// cuaca.then(response => console.log(response));

Promise.all([film, cuaca])
  // .then(response => console.log(response));
  .then(response => {
    const [film, cuaca] = response;
    console.log(film);
    console.log(cuaca);
  });
