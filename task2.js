// ---------------Part 1: Variables and Data Types (5 Questions)------------
// Q1. Declare variables using var, let, and const.
// Reassign and redeclare them wherever allowed, then print the results.
var name = "Rohith";
name = "Kumar";
var name = "Rohith Kumar";

let age = 25;
age = 30;
// let age = 35; // Cannot redeclare in the same scope

const country = "India";
// country = "UK"; // Cannot reassign const

console.log(name);
console.log(age);
console.log(country);

// Output:
// Rohith Kumar
// 30
// India

// Q2. Create variables for your name, age, and programming knowledge.
// Print each variable and its data type using typeof.

let myName = "Rohith";
let myAge = 25;
let programmingKnowledge = "Beginner";

console.log(myName, typeof(myName));
console.log(myAge, typeof(myAge));
console.log(programmingKnowledge, typeof(programmingKnowledge));

// Output:
// Rohith string
// 25 number
// Beginner string

// Q3. Create an array of 5 fruits.
// Print the complete array, the first element, and the last element.

let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

console.log(fruits);
console.log(fruits[0]);
console.log(fruits[fruits.length-1]);
// Output:
// ["Apple", "Banana", "Mango", "Orange", "Grapes"]
// Apple
// Grapes

// Q4. Create an object containing your name, role, and CGPA.
// Print each property separately.

let student = {
    name: "Rohith",
    role: "Python Full Stack Developer",
    cgpa: 9.08
};

console.log(student.name);
console.log(student.role);
console.log(student.cgpa);
// Output:
// Rohith
// Python Full Stack Developer
// 9.08

// Q5. Take the user's name and age using prompt().
// Display the name using alert() and print the age in the console.

let userName = prompt("Enter your name:");
alert(userName);

let userAge = prompt("Enter your age:");
console.log(userAge);
// Output:
// Alert popup displays the entered name.
// Console displays the entered age.

// ============== Part 2: Operators - 7 Questions============

// Q6. Declare two numbers and perform addition, subtraction,
// multiplication, division, modulus, and exponentiation.

let num1 = 10;
let num2 = 3;

console.log(num1 + num2); // Addition: 13
console.log(num1 - num2); // Subtraction: 7
console.log(num1 * num2); // Multiplication: 30
console.log(num1 / num2); // Division: 3.3333333333333335
console.log(num1 % num2); // Modulus: 1
console.log(num1 ** num2); // Exponentiation: 1000 

// Q7. Predict the output.

let a = 5;
console.log(a++); // Output: 5
console.log(a);   // Output: 6
console.log(++a); // Output: 7

// Q8. Predict the output.

let x = 10;
let y = x--;
let z = --x;

console.log(x); // Output: 8
console.log(y); // Output: 10
console.log(z); // Output: 8

// Q9. Use +=, -=, *=, /=, and %= assignment operators.
// Print the final value after each operation.

let value = 10;

value += 5;
console.log(value); // Output: 15

value -= 3;
console.log(value); // Output: 12

value *= 2;
console.log(value); // Output: 24

value /= 4;
console.log(value); // Output: 6

value %= 4;
console.log(value); // Output: 2

// Q10. Predict the results of these comparisons.

console.log(5 == "5");  // Output: true
console.log(5 === "5"); // Output: false
console.log(10 != "10"); // Output: false
console.log(10 !== "10"); // Output: true

// Q11. Use &&, ||, and ! to check different combinations of conditions.

let ageCheck = 25;
let hasId = true;

console.log(ageCheck >= 18 && hasId); // Output: true
console.log(ageCheck < 18 || hasId); // Output: true
console.log(!hasId); // Output: false


// Q12. Use the ternary operator to check whether a user's age
// is 18 or above and print an appropriate message.

let userAgeCheck = 25;

let ageMessage = userAgeCheck >= 18
    ? "You are eligible."
    : "You are not eligible.";

console.log(ageMessage);
// Output: You are eligible.

//============== Part 3: Type Casting and Conditions================
// Q13. Predict the data type of each expression.

console.log(typeof ("hello" + 10));
// Output: string

console.log(typeof (10 + true));
// Output: number

console.log(typeof (10 + null));
// Output: number

console.log(typeof ("hello" + undefined));
// Output: string

// Q14. Use Number() to convert a value received through prompt()
// into a number. Add 10 and print the result.

let inputNumber = Number(prompt("Enter a number:"));
let resultNumber = inputNumber + 10;
console.log(resultNumber);
// Example: Input 20 -> Output: 30

// Q15. Use Boolean() to check the Boolean values of an empty string,
// a non-empty string, 0, and true.

console.log(Boolean(""));
// Output: false

console.log(Boolean("Hello"));
// Output: true

console.log(Boolean(0));
// Output: false

console.log(Boolean(true));
// Output: true

// Q16. Write an if-else statement to check whether a number is positive or not.

let numberCheck = 5;

if (numberCheck > 0) {
    console.log("The number is positive.");
} else {
    console.log("The number is not positive.");
}
// Output: The number is positive.

// Q17. Use else-if to display a message based on the time entered
// by the user: early morning, morning, afternoon, evening, or night.

let time = Number(prompt("Enter the hour (0-23):"));

if (time >= 4 && time < 6) {
    console.log("Early morning");
} else if (time >= 6 && time < 12) {
    console.log("Morning");
} else if (time >= 12 && time < 17) {
    console.log("Afternoon");
} else if (time >= 17 && time < 21) {
    console.log("Evening");
} else if (time >= 0 && time < 24) {
    console.log("Night");
} else {
    console.log("Invalid time");
}
// Example: Input 14 -> Output: Afternoon

// Q18. Create a nested if statement to check eligibility based on
// age, height, and weight.

let personAge = 25;
let personHeight = 183;
let personWeight = 75;

if (personAge >= 18) {
    if (personHeight >= 160) {
        if (personWeight >= 50 && personWeight <= 100) {
            console.log("Eligible");
        } else {
            console.log("Not eligible: weight criteria not met");
        }
    } else {
        console.log("Not eligible: height criteria not met");
    }
} else {
    console.log("Not eligible: age criteria not met");
}
// Output: Eligible

// ===========Part 4: Switch and Loops - 8 Questions============
// Q19. Use switch to display a message based on a traffic light color.
// Display an error for an invalid color.

let trafficLight = "red";

switch (trafficLight) {
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Get ready");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.error("Invalid traffic light color");
}
// Output: Stop

// Q20. Use a for loop to print numbers from 1 to 20.

for (let i = 1; i <= 20; i++) {
    console.log(i);
}
// Output: 1 to 20

// Q21. Use a for loop to print all even numbers from 2 to 20.

for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}
// Output: 2, 4, 6, 8, 10, 12, 14, 16, 18, 20

// Q22. Use a while loop to print numbers from 10 down to 1.

let countDown = 10;

while (countDown >= 1) {
    console.log(countDown);
    countDown--;
}
// Output: 10 to 1

// Q23. Use a do-while loop to print numbers from 1 to 10.

let countUp = 1;

do {
    console.log(countUp);
    countUp++;
} while (countUp <= 10);
// Output: 1 to 10

// Q24. Use a for-of loop to print each character in "JavaScript".

let word = "JavaScript";

for (let character of word) {
    console.log(character);
}
// Output:
// J
// a
// v
// a
// S
// c
// r
// i
// p
// t

// Q25. Use a for-of loop to print every element in an array of 5 student names.

let students = ["Rohith", "Arun", "Kumar", "Priya", "Naveen"];

for (let studentName of students) {
    console.log(studentName);
}
// Output:
// Rohith
// Arun
// Kumar
// Priya
// Naveen

// Q26. Use a for-in loop to print all keys and values of this object.

let student1 = {
    name: "Priya",
    role: "Frontend Developer",
    cgpa: 9
};

for (let key in student1) {
    console.log(key + ": " + student1[key]);
}
// Output:
// name: Priya
// role: Frontend Developer
// cgpa: 9

// ============Part 4: Switch and Loops - 8 Questions=============

// Q19. Use switch to display a message based on a traffic light color.
// Display an error for an invalid color.

let trafficLight1 = "red";

switch (trafficLight1) {
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Get ready");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.error("Invalid traffic light color");
}
// Output: Stop


// Q20. Use a for loop to print numbers from 1 to 20.

for (let i = 1; i <= 20; i++) {
    console.log(i);
}
// Output: 1 to 20


// Q21. Use a for loop to print all even numbers from 2 to 20.

for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}
// Output: 2, 4, 6, 8, 10, 12, 14, 16, 18, 20

// Q22. Use a while loop to print numbers from 10 down to 1.

let q22Count = 10;

while (q22Count >= 1) {
    console.log(q22Count);
    q22Count--;
}
// Output: 10 to 1


// ==========================================
// Q23. Use a do-while loop to print numbers from 1 to 10.

let q23Count = 1;

do {
    console.log(q23Count);
    q23Count++;
} while (q23Count <= 10);
// Output: 1 to 10


// ==========================================
// Q24. Use a for-of loop to print each character in "JavaScript".

let q24Word = "JavaScript";

for (let q24Character of q24Word) {
    console.log(q24Character);
}
// Output: J a v a S c r i p t (one character per line)


// ==========================================
// Q25. Use a for-of loop to print 5 student names.

let q25Students = ["Rohith", "Arun", "Kumar", "Priya", "Naveen"];

for (let q25Student of q25Students) {
    console.log(q25Student);
}
// Output: Rohith, Arun, Kumar, Priya, Naveen (one per line)


// ==========================================
// Q26. Use a for-in loop to print all keys and values of an object.

let q26Student = {
    name: "Priya",
    role: "Frontend Developer",
    cgpa: 9
};

for (let q26Key in q26Student) {
    console.log(q26Key + ": " + q26Student[q26Key]);
}
// Output:
// name: Priya
// role: Frontend Developer
// cgpa: 9


// ==========================================
// Q27. Take two numbers using prompt() and display their sum,
// difference, product, and remainder.

let q27FirstNumber = Number(prompt("Q27: Enter the first number:"));
let q27SecondNumber = Number(prompt("Q27: Enter the second number:"));

console.log("Sum:", q27FirstNumber + q27SecondNumber);
console.log("Difference:", q27FirstNumber - q27SecondNumber);
console.log("Product:", q27FirstNumber * q27SecondNumber);
console.log("Remainder:", q27FirstNumber % q27SecondNumber);
// Example input: 10 and 3
// Output: 13, 7, 30, 1


// ==========================================
// Q28. Print only numbers greater than 10 from an array.

let q28Numbers = [5, 12, 8, 20, 15];

for (let q28Number of q28Numbers) {
    if (q28Number > 10) {
        console.log(q28Number);
    }
}
// Output:
// 12
// 20
// 15


// ==========================================
// Q29. Take a user's age and display eligibility using alert().

let q29Age = Number(prompt("Q29: Enter your age:"));

if (q29Age >= 18) {
    alert("You are eligible.");
} else {
    alert("You are not eligible.");
}
// Example input: 25
// Output: You are eligible.


// Q30. Create a simple menu using switch with these options:
// addition, subtraction, multiplication, and division.
// Take two numbers from the user and display the selected operation's result.

let q30Choice = prompt(
    "Choose an operation: addition, subtraction, multiplication, or division"
);

let q30Num1 = Number(prompt("Enter the first number:"));
let q30Num2 = Number(prompt("Enter the second number:"));

switch (q30Choice) {
    case "addition":
        alert("Result: " + (q30Num1 + q30Num2));
        break;

    case "subtraction":
        alert("Result: " + (q30Num1 - q30Num2));
        break;

    case "multiplication":
        alert("Result: " + (q30Num1 * q30Num2));
        break;

    case "division":
        if (q30Num2 !== 0) {
            alert("Result: " + (q30Num1 / q30Num2));
        } else {
            alert("Cannot divide by zero.");
        }
        break;

    default:
        alert("Invalid operation. Please choose a valid option.");
}

// Example input:
// Operation: addition
// First number: 10
// Second number: 5
// Output: Result: 15