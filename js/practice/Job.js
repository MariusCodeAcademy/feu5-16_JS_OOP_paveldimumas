'use strict';
console.log('Job.js file was loaded');

/**
 * Darbu skirtu Freelancerui objektas
 */
class Job {
  // statine savybe priskiriama prie pacios klases ne prie individualaus objekto
  static uid = 0;
  id;
  price;
  title;
  done = false;

  constructor(jobTitle, jobPrice) {
    this.title = jobTitle;
    this.price = jobPrice;
    this.id = 'j_' + ++Job.uid;
  }

  completeJob() {
    this.done = true;
  }
}

// console.log('Job.uid ===', Job.uid);

const jArr = [
  new Job('Footer', 250),
  new Job('Aside', 150),
  new Job('Main', 500),
  new Job('Slider', 600),
];
jArr[2].completeJob();
console.log('jArr ===', jArr);
console.log('Job.uid ===', Job.uid);
