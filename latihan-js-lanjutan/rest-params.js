// Rest Parameter
// function myFunc(a, ...myArgs) {
// return `a = ${a}, b = ${b}, myArgs = ${myArgs}`;
// return myArgs;

// return Array.from(arguments);

// return [...arguments];
// }

// console.log(myFunc(1, 2, 3, 4, 5));

// function jumlahkan(...angka) {
//   // let total = 0;
//   // for(const a of angka) {
//   //     total += a;
//   // }
//   // return total;
//   return angka.reduce((a, b) => a + b);
// }

// console.log(jumlahkan(1, 2, 3, 4, 5));

// array destructuring
// const hubungan = ["kiko", "taftaf", "zakia", "surya"];
// const [hamster, kucing, ...pacar] = hubungan;
// console.log(pacar);

// object destructuring
// const team = {
//     pm: 'zakia',
//     fe: 'kia',
//     be: 'jek'
// }
// const {pm, ...myTeam} = team;
// console.log{team};

// filtering
function filterBy(type, ...values) {
  return values.filter(v => typeof v === type);
}

console.log(filterBy("boolean", 1, 2, "zakia", false, 10, true, "kia"));
