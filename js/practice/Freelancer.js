'use strict';
console.log('Freelancer.js file was loaded');

// aprasysim klase Freelancer, paveldim Employee
class Freelancer extends Employee {
  jobs = [];

  // methods
  // 1. asignJob(jobObj) - pridedam darba
  asignJob(jobObj) {
    // patikrinti ar jobObj yra sukurtas paga Job klase
    // debugger;
    if (!(jobObj instanceof Job)) {
      console.warn('Only valid jobs please');
      return;
    }
    // jobObj instanceof Job === true
    this.jobs.push(jobObj);
  }

  // jObj === {id: 'j_1', price: 250, title: 'Footer', done: false}
  finishJob(jobId) {
    // surasti darba pagal id ir jam iskviesti uzbaigimo metoda
    const foundJob = this.jobs.find((jObj) => jObj.id === jobId);
    // jei nerasta darbo su paduotu id
    if (!foundJob) {
      console.warn('tokio darbo nera');
      return;
    }
    foundJob.completeJob();
    console.log(`${this.firstName} finished ${foundJob.title} for ${foundJob.price}`);
  }

  paySallary() {
    // suskaiciuoti ir ismoketi atlyginima
    // atrinkti tik pabaigtus darbus,
    const doneJobs = this.jobs.filter((jObj) => jObj.done === true);
    console.log('doneJobs ===', doneJobs);
    // ir suskaiciuoti ju verte
    const doneJobsPrice = doneJobs.reduce((total, jObj) => total + jObj.price, 0);
    console.log('doneJobsPrice ===', doneJobsPrice);
    // baigtu darbu jobs arr neturetu likti
    // atrinkti nebaigtus darbus ir prilyginti jobs masyvui
    this.jobs = this.jobs.filter((jObj) => jObj.done === false);
    // verte grazinti
    return doneJobsPrice;
  }
}
// papildomai inicijuojam jobs tuscia masyva sukuriant objekta
// const f1 = new Freelancer('James', 'Band');
// f1.asignJob({ id: 'j_001', titles: 'Header', price: 250, done: false });
// f1.asignJob({ kazka: 'kazkas' });
// f1.asignJob(jArr[0]);
// console.log('f1 ===', f1);
// metodai
// 2. finishJob(jobId) - uzbaigiam darba
// 3. paySallary() - ismoketi  atlyginima
