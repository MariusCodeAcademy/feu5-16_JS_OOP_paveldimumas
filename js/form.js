'use strict';
console.log('form.js file was loaded');

// taikomes ============================================

const newEFormEl = document.forms.newEmployeeForm;
const fNameEl = newEFormEl.elements.firstName;
const lNameEl = newEFormEl.elements.lastName;
const workerTypeEl = newEFormEl.elements.workerType;
const hourlyRateEl = newEFormEl.elements.hourlyRate;

// Global Arr
const emplArr = [];

// Event listeners ============================================
newEFormEl.addEventListener('submit', newWorkerFormHandler);

workerTypeEl.addEventListener('change', toggleHourlyRate);
// Functions ============================================

function newWorkerFormHandler(event) {
  event.preventDefault();
  // console.log('js control');

  const wType = workerTypeEl.value;
  console.log('wType ===', wType);

  const newEmp = {
    firstName: fNameEl.value,
    lastName: lNameEl.value,
    type: wType,
  };
  if (wType === 'worker') {
    newEmp.hourlyRate = hourlyRateEl.value;
  }
  // console.log('newEmp ===', newEmp);
  createNewEmployee(newEmp);
}

function toggleHourlyRate() {
  console.log('hide or show hourly rate');
  hourlyRateEl.classList.toggle('d-none');
}

function createNewEmployee(newEObj) {
  // turi pasitikrinti ar kurti freelancer, ar worker
  console.log('newEObj ===', newEObj);
  if (newEObj.type === 'freelancer') {
    // kuriam freelancer
    const newF = new Freelancer(newEObj.firstName, newEObj.lastName);
    emplArr.push(newF);
  } else {
    // kuriam worker
    const newW = new MyWorker(newEObj.firstName, newEObj.lastName, newEObj.hourlyRate);
    emplArr.push(newW);
  }
  // ir sukurti
  console.log('emplArr ===', emplArr);
}

// isvalyti name ir lastname po darb sukurimo

// patalpinti naujai sukurta darbuotoja ir dom
