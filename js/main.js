'use strict';
console.log('main.js file was loaded');

const workers = [
  new Employee('Bill', 'Gates', 1970, 15),
  new Employee('James', 'Cameron', 1975, 100),
  new Employee('James', 'Bond', 1978, 10),
];
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
  worker.pay();
});
