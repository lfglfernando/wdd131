// scores.push(100); // Adds a new element to the end of the array
// scores.pop(); // Removes the last element from the array
// scores.shift(); // Removes the first element from the array
// scores.unshift(100); // Adds a new element to the beginning of the array
// scores.slice(2,3); // Cut out a portion of the array starting at an index for a given length
// scores.splice(2, 1); // Removes 1 element from the array starting at index 2
// scores.join(', '); // transform the array into a single string with a comma and space delimiter option

// let names = ['Nancy', 'Blessing', 'Jorge', 'Svetlana'];

// let firstName = 'Antonia';
// let lastName = 'Francesca';

// function fullName(first, last) {
//     return first + " " + last;
// }

// console.log(fullName('Luis', 'Galvez'));

// const fullName = function (first, last) {
//     return `${first} ${last}`;
// }

// const fernandosNames = ['Fernando', 'Galvez']; 

// function fullName(valor1, valor2) {
//     return valor1 + " " + valor2;
// }

// console.log(fullName(fernandosNames[0],fernandosNames[1]));

const fullName = (firstName, lastName) => `${firstName} ${lastName}`;

document.querySelector('#fullName').innerHTML = fullName('Fernando', 'Galvez & Amy Faith');

let scores = [100, 72, 83, 94, 88, 87];
let accumulator = 0;
let count = 0;
scores.forEach(score => {
  if (score > 87) {
    accumulator += score;
    count ++;
  }
});
if ( count > 0 ) {
  console.log(accumulator/count); 
} else {
  console.log("No scores reported.");
}