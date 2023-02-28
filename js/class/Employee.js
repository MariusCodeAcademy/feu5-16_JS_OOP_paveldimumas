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

  get calcPay() {
    // ka darom?
    const toBePayed = this.dollarPerHour * this.hoursWorked;
    console.log('toBePayed ===', toBePayed);
    return toBePayed;
  }

  pay() {
    // ismoketi (grazinsim suma)
    const payAmount = this.calcPay();
    // log line
    console.log(
      `${this.fullName()} was payed ${payAmount} for ${
        this.hoursWorked
      } hours of hard work. thank you`
    );
    // nunulinsim valandas
    this.hoursWorked = 0;
  }
}

// const w1 = new Employee('Bill', 'Gates', 1970, 15);

// // prideti 8 val darbo
// w1.workHours(10);
// w1.workHours(20);
// w1.workHours(30);
// w1.calcPay();
// w1.pay();

// console.log('w1 ===', w1);
