// Constructor function 
function Person(firstName, lastName, dob) {
    this.firstName = firstName,
    this.lastName = lastName,
    this.dob = dob
}

// Instatiate object
const person1 = new Person ('John', 'Doe', '11/09/1993')

console.log(person1)