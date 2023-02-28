'use strict';
console.log('Employee.js file was loaded');

// sukuriam klase.
class Employee {
  constructor(argFname, argLname) {
    this.firstName = argFname;
    this.lastName = argLname;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  paySallary() {
    // tures buti igyvendintas vaikinese klasese
  }
}
// firstName, lastName savybes
// fullName getteri

// tuscia (imituojam abstraktu)  metoda paySallary()
