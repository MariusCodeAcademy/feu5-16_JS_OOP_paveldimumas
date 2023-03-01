'use strict';
console.log('Freelancer.js file was loaded');

// aprasysim klase Freelancer, paveldim Employee
class Freelancer extends Employee {
  jobs = [];
  asignJob(jobObj) {
    if (!(jobObj instanceof Job)) {
      console.warn('Only valid jobs please');
      return;
    }

    this.jobs.push(jobObj);
  }

  finishJob(jobId) {
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
    const doneJobs = this.jobs.filter((jObj) => jObj.done === true);
    console.log('doneJobs ===', doneJobs);
    const doneJobsPrice = doneJobs.reduce((total, jObj) => total + jObj.price, 0);
    console.log('doneJobsPrice ===', doneJobsPrice);
    this.jobs = this.jobs.filter((jObj) => jObj.done === false);
    return doneJobsPrice;
  }
}
