'use strict';
console.log('Student.js file was loaded');

class Student extends Person {
  constructor(argName, argSurname, argBirthYear, university, studyYear) {
    // pirmiausia turim igyvendinti(iskviesti) tevines klase konstruktoriu
    super(argName, argSurname, argBirthYear);
    // studento savybes
    this.uni = university;
    this.uniYear = studyYear;
    this.mathGrades = [];
  }

  addMathGrade(mark) {
    // validation
    if (isNaN(Number(mark))) {
      // mark yra neskaicius
      console.warn('tik skaiciai please');
      return;
    }
    // mark yra skaicius
    this.mathGrades.push(mark);
  }
}

const s1 = new Student('Jane', 'Dow', 1999, 'KTU', 1);
s1.addMathGrade(7);
s1.addMathGrade(8);
s1.addMathGrade(5);
s1.addMathGrade(10);
s1.addMathGrade('desimt');
s1.addMathGrade(0);
console.log('s1 ===', s1);
console.log('s1.fullName() ===', s1.fullName());
s1.myAge();
