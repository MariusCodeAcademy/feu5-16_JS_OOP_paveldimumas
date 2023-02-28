'use strict';
console.log('Person.js file was loaded');

// sukurti Asmens klase
// tures savybes, name, surname, birthYear
// metodas - myAge - grazins kiek siuo metu asmeniui yra metu

class Person {
  constructor(argName, argSurname, argBirthYear) {
    this.name = argName;
    this.surname = argSurname;
    this.birthYear = argBirthYear;
  }

  myAge() {
    const yearNow = new Date().getFullYear();
    console.log('yearNow ===', yearNow);
    const age = yearNow - this.birthYear;
    console.log('age ===', age);
  }

  fullName() {
    return `${this.name} ${this.surname}`;
  }
}
// const p1 = new Person('James', 'Bond', 1960);
// const p3 = new Person('Serbentautas', 'Bordiuras', 1982);
// console.log(p3);
// p3.myAge();
// const p1FullName = p1.fullName();
// console.log('p1FullName ===', p1FullName);

// // Person klase kuria tokius objektus
// const p2 = {
//   name: 'James',
//   surname: 'Bond',
//   birthYear: 1960,
//   fullName: function () {
//     return `${this.name} ${this.surname}`;
//   },
// };
