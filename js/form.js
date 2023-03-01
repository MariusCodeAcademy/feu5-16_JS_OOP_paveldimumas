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

function newWorkerFormHandler() {}

function toggleHourlyRate() {
  console.log('hide or show hourly rate');
  hourlyRateEl.classList.toggle('d-none');
}
