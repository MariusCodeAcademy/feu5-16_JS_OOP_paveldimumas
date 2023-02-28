'use strict';
console.log('app.js file was loaded');

const jArr = [
  new Job('Footer', 250),
  new Job('Aside', 150),
  new Job('Main', 500),
  new Job('Slider', 600),
];
console.log('jArr ===', jArr);
const f1 = new Freelancer('James', 'Band');

// priskiriam darbus
f1.asignJob(jArr[0]);
f1.asignJob(jArr[1]);
f1.asignJob(jArr[3]);
console.log('f1  pries ===', f1);
// pabaigia darbus
f1.finishJob('j_1');
f1.finishJob('j_2');
f1.paySallary();
console.log('f1 po===', f1);

const w1 = new MyWorker('Jane', 'Dow', 20);
w1.work(160);

console.log('w1 ===', w1);
