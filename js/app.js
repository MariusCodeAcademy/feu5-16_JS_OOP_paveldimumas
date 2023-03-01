'use strict';
console.log('app.js file was loaded');

const appDiv = document.getElementById('app');

const jArr = [
  new Job('Footer', 250),
  new Job('Aside', 150),
  new Job('Main', 500),
  new Job('Slider', 600),
];
console.log('jArr ===', jArr);
const f1 = new Freelancer('James', 'Band');
const f2 = new Freelancer('Serbentautas', 'Bordo');

// priskiriam darbus
f1.asignJob(jArr[0]);
f1.asignJob(jArr[1]);
f2.asignJob(jArr[2]);
f1.asignJob(jArr[3]);
console.log('f1  pries ===', f1);
// pabaigia darbus
f1.finishJob('j_1');
f1.finishJob('j_2');
f2.finishJob('j_3');

// f1.paySallary();
console.log('f1 po===', f1);

const w1 = new MyWorker('Jane', 'Dow', 20);
const w2 = new MyWorker('Mike', 'White', 10);
w1.work(160);
w2.work(80);
w2.work(8);

const employees = [f1, f2, w1, w2];

employees.forEach((eObj) => {
  const paySlip = `${eObj.fullName}: to be payed: ${eObj.paySallary()}`;
  // appDiv.insertAdjacentHTML('beforeend', `<h2>${paySlip}</h2>`);
});

console.log('employees ===', employees);
