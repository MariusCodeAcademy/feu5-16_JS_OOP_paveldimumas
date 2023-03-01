'use strict';
console.log('form.js file was loaded');

// taikomes ============================================

const newEFormEl = document.forms.newEmployeeForm;
const fNameEl = newEFormEl.elements.firstName;
const lNameEl = newEFormEl.elements.lastName;
const workerTypeEl = newEFormEl.elements.workerType;
const hourlyRateEl = newEFormEl.elements.hourlyRate;

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
  console.log('newEmp ===', newEmp);
  createNewEmployee(newEmp);
}

function toggleHourlyRate() {
  console.log('hide or show hourly rate');
  hourlyRateEl.classList.toggle('d-none');
}

function createNewEmployee(newEObj) {}
