//control statements
//if....else

//task 1,2
let a=19;
if(a>=18)console.log("can vote")
else console.log("can't vote");

//else...if  task 5 using if...else
let score = 75;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: D or lower");
}

//nested if...else task 3
let num1=20;
let num2=25;
let num3=30;

if(num1>num2){
    if(num1>num3)console.log(num1);
    else console.log(num3);
}
else {
    if(num2>num3)console.log(num1);
    else console.log(num3);
}

//switch case
            //task4
let day=6;
let dayname

switch(day){
   case 1: dayname="Mon"
    break;
   case 2:dayname="Tue"
    break;
   case 3:dayname="Wed"
    break;
   case 4:dayname="Thu"
    break;
   case 5:dayname="Fri"
    break;
   case 6:dayname="Sat"
    break;
   case 7:dayname="Sun"
    break;
   default:dayname="Undefined Day number"
    break;
}
console.log(dayname);

//task 5
let marks=6;
let grade

switch(marks){
        case (marks >= 90):
            grade = "A";
            break;
        case (marks >= 80):
            grade = "B";
            break;
        case (marks >= 70):
            grade = "C";
            break;
        case (marks >= 60):
            grade = "D";
            break;
        case (marks > 50):
            grade = "D";
            break;
        case (marks <= 50):
            grade = "E";
            break;
        default:
            grade = "Undefined score";
            break;
}
console.log(grade);

//ternary  task 6
let num=20
console.log((num%2==0)?"even":"odd");

//task 7
let year=2000
let leap
if(year%4==0){
    let y=year%100;
    switch (y) {
        case 0:if(year%400==0)leap="yes! one more day with Chai-aur-code";
                else leap="not a leap year";
            break;
        default: leap="yes! one more day with Chai-aur-code";
            break;
    }
}
else{
    leap="not a leap year";
}
console.log(leap);
