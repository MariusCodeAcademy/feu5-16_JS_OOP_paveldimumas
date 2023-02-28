'use strict';
console.log('Student.js file was loaded');

class Student extends Person {
  constructor(argName, argSurname, argBirthYear, university, studyYear) {
    // pirmiausia turim igyvendinti(iskviesti) tevines klase konstruktoriu
    super(argName, argSurname, argBirthYear);
    // studento savybes
    this.uni = university;
    this.uniYear = studyYear;
  }
}

const s1 = new Student('Jane', 'Dow', 1999, 'KTU', 1);
console.log('s1 ===', s1);
console.log('s1.fullName() ===', s1.fullName());
s1.myAge();
