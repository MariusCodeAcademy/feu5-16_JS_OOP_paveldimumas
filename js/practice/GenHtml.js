'use strict';
console.log('GenHtml.js file was loaded');

class GenHtml {
  static output = document.getElementById('empl');

  static addEmployee(newEObj) {
    const newEHtml = `<h2 class='card'>${newEObj.firstName} ${newEObj.lastName}, ${newEObj.type}</h2>`;
    GenHtml.output.insertAdjacentHTML('beforeend', newEHtml);
  }
}
