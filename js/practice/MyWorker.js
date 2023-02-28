'use strict';
console.log('Emploee.js file was loaded');

// sukurti Worker klase
// Emploee paveldi Emploee
class MyWorker extends Employee {
  hourlyPay;
  hoursWorked = 0;
  // hourly pay
  // hoursWorked
  constructor(fName, lName, dollarPerHour) {
    super(fName, lName);
    this.hourlyPay = dollarPerHour;
  }

  work(qty) {
    this.hoursWorked += qty;
  }

  paySallary() {
    const pay = this.hoursWorked * this.hourlyPay;
    this.hoursWorked = 0;
    return pay;
  }
  // metodas paySallary()
}
