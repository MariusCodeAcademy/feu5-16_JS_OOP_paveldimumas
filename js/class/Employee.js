'use strict';
console.log('Emploee.js file was loaded');

// sukurti Emploee klase
// Emploee paveldi Person
class Employee extends Person {
  constructor(firstname, lastname, bYear, hourlyRate) {
    super(firstname, lastname, bYear);
    // papildomai pridedam hourlyRate, hoursWorked inicijuojam i 0 kai sukuriam darbuotoja
    this.dollarPerHour = hourlyRate;
    this.hoursWorked = 0;
  }
  // metoda workHours() kurio pagalba pridedam valandu prie hoursWorked
  workHours(howMany) {
    this.hoursWorked += howMany;
  }
}

const w1 = new Employee('Bill', 'Gates', 1970, 15);
console.log('w1 ===', w1);

// prideti 8 val darbo
// w1.workHours(160);
