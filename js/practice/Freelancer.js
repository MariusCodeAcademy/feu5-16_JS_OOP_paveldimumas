'use strict';
console.log('Freelancer.js file was loaded');

// aprasysim klase Freelancer, paveldim Employee
class Freelancer extends Employee {
  jobs = [];

  // methods
  // 1. asignJob(jobObj) - pridedam darba
  asignJob(jobObj) {
    // patikrinti ar jobObj yra sukurtas paga Job klase
    this.jobs.push(jobObj);
  }

  finishJob(jobId) {
    // surasti darba pagal id ir jam iskviesti uzbaigimo metoda
  }

  paySallary() {
    // suskaiciuoti ir ismoketi atlyginima
  }
}
// papildomai inicijuojam jobs tuscia masyva sukuriant objekta
const f1 = new Freelancer('James', 'Band');
f1.asignJob({ id: 'j_001', title: 'Header', price: 250, done: false });
console.log('f1 ===', f1);
// metodai
// 2. finishJob(jobId) - uzbaigiam darba
// 3. paySallary() - ismoketi  atlyginima
