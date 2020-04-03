// ambil semua elemen video
const videos = Array.from(document.querySelectorAll("[data-duration]"));

// pilih 'Resep'

let resep = videos
  .filter(video => video.textContent.includes("Resep"))

  // ambil durasi masing2 video
  .map(item => item.dataset.duration)

  // ubah durasi menjasi int, ubah menit jadi detik
  .map(waktu => {
    const parts = waktu.split(":").map(part => parseFloat(part));
    return parts[0] * 60 + parts[1];
  })

  // jumlahkan detik
  .reduce((total, detik) => total + detik);

// ubah format jadi jam menit detik
const jam = Math.floor(resep / 3600);
resep = resep - jam * 3600;
const menit = Math.floor(resep / 60);
const detik = resep - menit * 60;

// simpan di dom
const pDurasi = document.querySelector(".total-durasi");
pDurasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik.`;
const jmlVideo = videos.filter(video => video.textContent.includes("Resep"))
  .length;
const pJmlVideo = document.querySelector(".jumlah-video");
pJmlVideo.textContent = `${jmlVideo} Video`;
