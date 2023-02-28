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

f1.asignJob(jArr[0]);
console.log('f1 ===', f1);
