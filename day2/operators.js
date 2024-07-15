//general operators
let sum = 5 + 2; // 7
let difference = 5 - 2; // 3
let product = 5 * 2; // 10
let quotient = 5 / 2; // 2.5
let remainder = 5 % 2; // 1
let power = 5 ** 2; // 25
let a = 5;
a++; // 6
let b = 5;
b--; // 4
//exponent assignment
let y = 5;
y **= 2; // y = y ** 2; // 25

5 == '5'; // true
5 != '5'; // false

5 === '5'; // false
5 === 5; // true

5 !== '5'; // true
5 !== 5; // false

//bitwise operator and comparision are same as in c++
//extra

//1.right shift vs unsigned right shift
let k = -8; // Binary: 11111111 11111111 11111111 11111000 (32-bit representation)
let m = k >> 2;
console.log(k); // Output: -2 (Binary: 11111111 11111111 11111111 11111110)

let num = -8; // Binary: 11111111 11111111 11111111 11111000 (32-bit representation)
let num2 = a >>> 2;
console.log(num2); // Output: 1073741822 (Binary: 00111111 11111111 11111111 11111110)

//string
let greeting = 'Hello' + ' ' + 'World'; // 'Hello World'
let greet = 'Hello';
greet += ' World'; // 'Hello World'
//ternary
let age = 18;
let status = (age >= 18) ? 'adult' : 'minor'; // 'adult'
//typeof
typeof 123; // 'number'
typeof 'Hello'; // 'string'
//instanceof
let date = new Date();
console.log(date instanceof Date); // true
//nullish coelescence operator(Returns the right-hand side operand
// when the left-hand side operand is null or undefined.)
let name = null;
let displayName = name ?? 'Anonymous'; // 'Anonymous'
//optional chaining opertaor
//Allows reading the value of a property located deep within a chain of connected 
//objects without having to explicitly check that each reference in the chain is valid
let user = {
    'name':xyz,
    address:{
        'pin':77777,
        'street':"nihar marg"
    }
};
console.log(user?.address?.street); // undefined

//instanceof
// The instanceof operator in JavaScript is used to check if an object
//  is an instance of a specific class or constructor function.
//   It returns true if the object is an instance, and false otherwise.

function Person(name) {
    this.name = name;
}

let person = new Person('Priyanshu');
console.log(person instanceof Person); // true
console.log(person instanceof Object); // true

let arr = [1, 2, 3];
console.log(arr instanceof Array); // true
console.log(arr instanceof Object); // true

class Car {
    constructor(make) {
        this.make = make;
    }
}

let myCar = new Car('Toyota');
console.log(myCar instanceof Car); // true
console.log(myCar instanceof Object); // true

