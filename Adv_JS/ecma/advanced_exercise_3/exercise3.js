// change everything below to the newer Javascript!

// let + const
var a = 'test'; let a = 'test'
var b = true;   const b = true
var c = 789;    const = 789
a = 'test2';    a = 'test2'


// Destructuring
var person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

var firstName = person.firstName;
var lastName = person.lastName;
var age = person.age;
var eyeColor = person.eyeColor;

const {firstName, lastName, age, eyeColor} = person;

// Object properties
const a = 'test';
const b = true;
const c = 789;

var okObj = {
  a: a,
  b: b,
  c: c
};

constant okobj2 = {a,b,c}

// Template strings
var message = "Hello " + firstName + " have I met you before? I think we met in " + city + " last summer no???";
const message = `hello ${firstName} have I met you before? I think we met in ${lagos} last summer no???`;

// default arguments
// default age to 10;
function isValidAge(age=10) {
    return age
}

const isValidAge = (age=10) => age;

const syn=m = Symbol("this is my first symbol");
// Symbol
// Create a symbol: "This is my first Symbol"

// Arrow functions
function whereAmI(username, location) {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}

const know_you = (username, location) => {
  if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }

}