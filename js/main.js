'use strict';
console.log('main.js file was loaded');

const workers = [
  new Employee('Bill', 'Gates', 1970, 15),
  new Employee('James', 'Cameron', 1975, 100),
  new Employee('James', 'Bond', 1978, 10),
];

// bill nori didesnio valandinio
// workers[0].#dollarPerHour = 100;
// gaunam privacios savybes reiksme per sukurta getteri
console.log('workers[0] ===', workers[0].dollarPerHour);

// pakeisti valandini su setteriu
workers[0].dollarPerHour = { rate: 20, pass: '123' };

// dirba bill
workers[0].workHours(10);
workers[0].workHours(70);
// dirba Cameron
workers[1].workHours(5);
workers[1].workHours(10);
// diba Bond
workers[2].workHours(10);
workers[2].workHours(170);

// sukti cikla spausdinant algas
workers.forEach((worker) => {
  const name = worker.calcPay;
  console.log(name);
});

// gauti naujam masyve visu darbuotoju amziu
const agesArr = workers.map((workerObj) => {
  return workerObj.myAge;
});
console.log('agesArr ===', agesArr);
