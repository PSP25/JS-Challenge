var a = 23;
let b = "i am a boy";
const c = true;
console.log(a, b, c);

//primitive data types(7)
//1.strings
let str = "Hello, world!";
let anotherStr = "Hello, world!";
let templateStr = `Hello, ${a}!`;
//2.numbers
let num = 42;
let floatNum = 3.14;
let exponentialNum = 2.5e6; // 2.5 * 10^6
console.log(typeof(NaN));//number
//3.boolean
let isTrue = true;
let isFalse = false;
//4.undefined
let undefinedVar;
console.log(undefinedVar); // undefined
console.log(undefined == 0);//false
console.log(undefined > 0);//false
console.log(undefined < 0);//false
//5.null(Represents the intentional absence of any object value.)
let nullVar = null;
console.log(null > 0);//false
console.log(null == 0);//false
console.log(null >= 0);//true
//6.symbols
let sym = Symbol('description');
//7.bigint
let bigInt = 1234567890123456789012345678901234567890n;


        //non premitive
//objects
let obj = { name: 'Priyanshu', age: 21 };
//functions
function sum(a, b) {
    return a + b;
}
//arrays
let array = [1, 'two', 3, { four: 4 }];
                    //very imp
// console.log(typeof 'Hello');      // "string"
// console.log(typeof 42);           // "number"
// console.log(typeof true);         // "boolean"
// console.log(typeof undefined);    // "undefined"
// console.log(typeof null);         // "object" (this is a known quirk of JavaScript)
// console.log(typeof Symbol());     // "symbol"
// console.log(typeof 123n);         // "bigint"
// console.log(typeof {});           // "object"
// console.log(typeof []);           // "object"
// console.log(typeof(array));       //"object"
// console.log(typeof function(){}); // "function"



//reassignment

let abc=1;
console.log(abc);
abc=4
console.log(abc);

var cde=3
console.log(cde);
cde=5
console.log(cde);

const fgh=6
console.log(fgh);
fgh=7
// console.log(fgh);//throws error
