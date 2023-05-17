// *******Chapter 1(Alerts)********

// -----------QUESTION NO I--------------

// alert ("First Name")

 // -----------QUESTION NO II--------------

// alert ("Last Name")

 // -----------QUESTION NO III--------------

// alert ("Email")

 // -----------QUESTION NO IV--------------

// alert ("Phone Number")

 // -----------QUESTION NO V--------------

// alert ("Password")

 // -----------QUESTION NO 2--------------

// alert("You're learning JavaScript!");

// -----------QUESTION NO 3--------------

// alert("Hello there! Welcome to my website.");


// ******Chapter 2 (Variables for string)*****

// -----------QUESTION NO 1--------------

// var myFavoriteNumber = 42;

// -----------QUESTION NO 2--------------

// var mySubject;
// mySubject = "Programming!";

// -----------QUESTION NO 3--------------

// var teamName = "WARRIORS";
// alert(teamName);

// -----------QUESTION NO 4--------------

// var bestMan = "sameer";
// bestMan = "saad";




// ******Chapter 3 (Variables for numbers)*******

// -----------QUESTION NO 1--------------

// var caseQty;

// -----------QUESTION NO 2--------------

// caseQty = 144;

// -----------QUESTION NO 3--------------

// var value;
// value = 3 + 5;
// var num = "9";
// num = parseInt(num);

// -----------QUESTION NO 4--------------

// var total;
// total = 10 + 5;

// -----------QUESTION NO 5--------------

// var merchTotal = 100;
// var shippingCharge = 10;
// var orderTotal = merchTotal + shippingCharge; 
// console.log(orderTotal)

// -----------QUESTION NO 6--------------

// var number = 7
// number= number+8
// console.log(number)

// ****Chapter 4 (Variable names Legal and Illegal)*****

// -----------QUESTION NO 1--------------

// var product_cost = 3.45;

// -----------QUESTION NO 2--------------

// var nameOfBand;

// -----------QUESTION NO 3--------------

// var legallyNamedVariable = 42;

// -----------QUESTION NO 4--------------

// var myName = 'saadRaees';

// -----------QUESTION NO 5--------------

// Legal variable names:

// firstName
// lastName
// age
// fullName
// _privateVar
// $price

// Illegal variable names:

// 1stName (cannot start with a number)
// full-name (cannot use hyphens)
// age! (cannot use special characters other than underscore and dollar sign)
// function (cannot use reserved keywords)
// my first name (cannot have spaces)

// ******Chapter 5 (Math Expression I)*****

// -----------QUESTION NO 1--------------

//"modulo operator" or "modulus operator." In programming, it is often denoted using the symbol "%".

// -----------QUESTION NO 2--------------

// var num = 2

// -----------QUESTION NO 3--------------

// var largeNum = 1000 * 2000;
// console.log(largeNum)

// -----------QUESTION NO 4--------------

// var variable1 = 50;
// var variable2 = 7;
// var result = variable1 - variable2;
// console.log(result)

// -----------QUESTION NO 5--------------

// var dividend = 17;
// var divisor = 5;
// var remainderResult = dividend % divisor;
// console.log(remainderResult)

// -----------QUESTION NO 6--------------

// var num1 = 2;
// var num2 = 6;
// var result = num1 * num2;
// alert("The result of multiplying " + num1 + " and " + num2 + " is: " + result);



// ***Chapter 6 (Math Expression II)***

// -----------QUESTION NO 1--------------

// var x = 9;
// x++;
// console.log(x); 

// -----------QUESTION NO 2--------------

// var x = 100;
// x -= 1;
// console.log(x);

// -----------QUESTION NO 3--------------

// var x = 50;
// var y = x++;
// console.log(y)

// -----------QUESTION NO 4--------------

// var y = 50;
// var z = --y;
// console.log(z)

// -----------QUESTION NO 5--------------

// var number = 9;
// var newNumber = --num;
// console.log(newNum)

// -----------QUESTION NO 6--------------

// var originalNumber = 5;
// var newNumber = ++originalNumber;
// console.log(newNumber)


// -----------QUESTION NO 7--------------

// var num = 7;
// num++;
// alert("The new value of num is: " + num);


// ***Chapter 7 (Math Expression III)***

// -----------QUESTION NO 1--------------

// var calculatedNum = 7 + (4 * 9);
// console.log(calculatedNum); 

// -----------QUESTION NO 2--------------

// var calculatedNum = (9 + 6) * 8;
// console.log(calculatedNum); 

// -----------QUESTION NO 3--------------

// var calculatedNum = (8 + 6) * (9 + 4);
// console.log(calculatedNum); 

// -----------QUESTION NO 4--------------

// var calculatedNum = ((3 + 4) * 8) + 7;
// console.log(calculatedNum);

// -----------QUESTION NO 5--------------

// var cost = (2 + 2) * (4 + 10);
// console.log(cost);

// -----------QUESTION NO 6--------------

// var units = 2 + (2 * 4) + 10;
// console.log(units);

// -----------QUESTION NO 7--------------

// var pressure = 4 / (2 * 4);
// console.log(pressure);


// ****Chapter 8 (Concatenating Text Strings)****

// -----------QUESTION NO 1--------------

// var num = "2" + "2";
// console.log(num);

// -----------QUESTION NO 2--------------

// var message = "Hello," + "Dolly";
// alert(message);

// -----------QUESTION NO 3--------------

// alert("33" + 3);
// (333)

// -----------QUESTION NO 4--------------

// var firstPart = "Pakistan";
// var secondPart = "Zindabad";
// alert(firstPart);
// alert(secondPart);

// -----------QUESTION NO 5--------------

// var myString = "The number is: " + 42;
// alert(myString)

// -----------QUESTION NO 6--------------

// var firstName = "Saad";
// var lastName = "Raees";
// var fullName = firstName + " " + lastName;
// alert(fullName)

// ****Chapter 9 (Prompts)****

// -----------QUESTION NO 1--------------

// var firstName = prompt("Enter first name");

// -----------QUESTION NO 2--------------

// var country = prompt("Country?", "China");

// -----------QUESTION NO 3--------------

// var yourName = prompt("Enter Your Name");

// -----------QUESTION NO 4--------------

// var answer = prompt("What is your favorite color?", "black");

// -----------QUESTION NO 5--------------

// var message = "What is your name?";
// var defaultResponse = "Saad";
// var userResponse = prompt(message, defaultResponse);
// console.log("User Entered: " + userResponse);

// -----------QUESTION NO 6--------------

// var response = prompt("What is your name?", "Saad Raees");
// alert("Your name is: " + response);


// ****Chapter 10 (if statments)****

// -----------QUESTION NO 1--------------

// var city = "Karachi";
// if (city === "Karachi") {
//   console.log("The City of Lights");
// }

// -----------QUESTION NO 2--------------

// var x= y;
// var y= x;
// if (x === y) {
//     var z = prompt("What is the value of z?");
// }

// -----------QUESTION NO 3--------------

// var ZipCode= "10010";
// if (ZipCode === "10010") {
//     alert("Karachi");
//   } else {
//     alert("Please write correct city");
//   }

// -----------QUESTION NO 4 --------------

// var x = 1;
// if (x === 1) {
//   x = 2;
// }
// console.log(x);


// -----------CHAPTER 11 COMPARISON OPERATORS--------------

// -----------QUESTION NO 1--------------
// if (AHSAN1 !== SAMI2) {
// }

// -----------QUESTION NO 2--------------
// if (Dog >= Lion) {
// }


// // -----------QUESTION NO 3--------------
// var mainNumber = 78; 

// if (mainNumber !== 49) {
//     mainNumber = 20; 
// }

//  console.log(mainNumber);


// // -----------QUESTION NO 4--------------

// var number = 18; // 
// if (number !== 14) {
//     alert("Congratulations!");
// }


// // -----------QUESTION NO 5--------------
// var enterName = prompt("Please enter your first name:");

// if (enterName !== "Saad") {
//     alert("No match");
// }

// // -----------CHAPTER 12 IF ELSE AND ELSE IF STATEMENT--------------

// // -----------QUESTION NO 1--------------
// var number1 = 6; // 
// var number2 = 5; // 

// if (number1 >= number2) {
//     alert("number1 is greater than or equal to number2");
// } else {
//     alert("number1 is less than number2");
// }


// // -----------QUESTION NO 2--------------
// var marksObtained = parseInt(prompt("Enter your marks obtained:"));
// var totalMarks = parseInt(prompt("Enter the total marks:"));

// var percentage = (marksObtained / totalMarks) * 100;

// if (percentage >= 94) {
//     alert("Your percentage: " + percentage.toFixed(2) + "%\nGrade: A");
// } else if (percentage >= 70) {
//     alert("Your percentage: " + percentage.toFixed(2) + "%\nGrade: B");
// } else if (percentage >= 50) {
//     alert("Your percentage: " + percentage.toFixed(2) + "%\nGrade: C");
// } else {
//     alert("Your percentage: " + percentage.toFixed(2) + "%\nGrade: D");
// }


// // -----------QUESTION NO 3--------------
// var a = 40;
// if (a === 40) {
//     alert("a is 10");
// } else {
//     var correctValueOfA = 18;
//     alert("The correct value of a is " + correctValueOfA);
// }


// // -----------QUESTION NO 4--------------

// var city = prompt("Enter a city:");

// if (city === "karachi") {
//     alert("Yeah it's karachi");
// } else if (city === "islamabad") {
//     alert("Yeah it's islamabad");
// } else {
//     alert("Different city");
// }


// // -----------CHAPTER 13 TESTING SETS OF CONDITION--------------

// // -----------QUESTION NO 1--------------
// if (a === b && c === d) {
//     // Code block to be executed if both conditions are true
// }


// // -----------QUESTION NO 2--------------
// if (a === b || c !== d) {
//     // Code block to be executed if either or both conditions are true
// }


// // -----------QUESTION NO 3--------------
// if ((name === "Muzammil" || name === "saad") && age < 32) {
//     // Code block to be executed if both conditions are true
// }


// // -----------QUESTION NO 4--------------
// var num1 = 17; // 
// var num2 = 20; // 
// if (num1 < num2 || num1 > num2) {
//     alert("The first variable is either less than or greater than the second variable");
// }


// // -----------QUESTION NO 5--------------
// var firstName = "Saad"; 
// var lastName = "Raees"; 
// var enteredFirstName = prompt("Please enter your first name:");
// var enteredLastName = prompt("Please enter your last name:");

// if (enteredFirstName === firstName && enteredLastName === lastName) {
//     alert("Name match!");
// }


// // -----------CHAPTER 14 IF STATEMENTS NESTED-------------

// // -----------QUESTION NO 1--------------

// var password = prompt("Enter your password:");

// if (password !== "") {
//     if (password.length > 5) {
//         alert("Strong Password!!");
//     } else {
//         alert("Password must be greater than 5");}
// }


// // -----------QUESTION NO 2--------------

// var a = 1;
// var c = "Max";

// if (a === 1) {
//     if (c === "Max") {
//         alert("Perfect...!");
//     }
// }


// // -----------QUESTION NO 3--------------

// var a = 1;
// var c ="max" ;
// if (a === 1 && c === "Max") {
//     alert("OK");
// } else {
//     alert("Not Matched")
// }



// // -----------QUESTION NO 4--------------

// var maths = 100;
// var english =100;

// if (maths === english) {
//     if (maths <= english) {
//         alert("Test passed!");
//     }
// }


// // -----------CHAPTER 15 ARRAY I-------------- 

// // -----------QUESTION NO 1--------------

// var myArray = [];


// // -----------QUESTION NO 2--------------
// var arr = ["Hello, world!"];

// // -----------QUESTION NO 3--------------

// var alphabet = ["h", "i", "j", "k"];
// alert(alphabet[2]);


// // -----------QUESTION NO 4--------------

// var alphabet = ["h", "i", "j", "k", "l", "m", "n", "o"];
// var length = alphabet.length;
// console.log(length);


// // -----------QUESTION NO 5--------------

// var arr = ["Saad"];
// arr[1] = "Sameer"; 
// alert(arr[1]);

// // -----------CHAPTER 16 ARRAY II--------------

// // -----------QUESTION NO 1--------------

// var myArray = ["Saad"];
// myArray.push("Raees");
// alert(myArray[myArray.length - 1]);


// // -----------QUESTION NO 2--------------

// var Alphabet = ["h", "i", "j", "k"];
// Alphabet.pop();
// console.log(Alphabet);


// // -----------QUESTION NO 3--------------

// var Alphabet = ["h", "i", "j", "k"];
// var newElement = 8;
// Alphabet.push(newElement);
// console.log(Alphabet);


// // -----------CHAPTER 16 ARRAY III--------------

// // -----------QUESTION NO 1--------------

// var sizes = ["S", "M", "XL", "XXL", "XXXL"];
// sizes.shift();
// console.log(sizes);


// // -----------QUESTION NO 2--------------

// var sizes = ["S", "M", "XL", "XXL", "XXXL"];
// sizes.unshift(1, 2, 3);
// console.log(sizes);


// // -----------QUESTION NO 3--------------

// var myArray = ["saad"]; 
// myArray.unshift("sameer");
// var firstElement = myArray[0]; 
// alert(firstElement);


// // -----------QUESTION NO 4--------------

// var sizes = ["S", "M", "XL", "XXL", "XXXL"];
// sizes.splice(2, 0, "L");
// console.log(sizes);


// // -----------QUESTION NO 5--------------

// var sizes = ["S", "M", "XL", "XXL", "XXXL"];
// var regSizes = sizes.slice(0, 3);
// console.log(regSizes);


// // -----------QUESTION NO 6--------------

// var pets = ["dog", "cat", "ox", "duck", "frog"];
// var indexToRemove = pets.indexOf("cat");
// if (indexToRemove !== -1) {
//     pets.splice(indexToRemove, 3, "elephant", "giraffe");
// }
// console.log(pets);


// // -----------QUESTION NO 7--------------

// var pets = ["dog", "cat", "ox", "duck", "frog"];
// var indexToRemove = pets.indexOf("cat");
// if (indexToRemove !== -1) {
//     pets.splice(indexToRemove, 1);
// }
// indexToRemove = pets.indexOf("ox");
// if (indexToRemove !== -1) {
//     pets.splice(indexToRemove, 1);
// }
// console.log(pets);


// // -----------QUESTION NO 8--------------

// var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];
// var reducedPets = pets.slice(3, 5);
// console.log(reducedPets);


// // -----------CHAPTER 17-20 FOR LOOPS--------------


// // -----------QUESTION NO 1--------------

// for (var i = 0; i < 10; i++) {
//     // Code to be executed 10 times
//     console.log("Loop iteration:", i + 1);
// }


// // -----------QUESTION NO 2--------------

// for (var i = 1; i <= 12; i++) {
//     // Code to be executed 12 times
//     console.log("Loop iteration:", i);
// }


// // -----------QUESTION NO 3--------------

// for (var i = 0; i <= 4; i++) {
// }


// // -----------QUESTION NO 4--------------

// for (var count = 1; count < 101; count++) {
    
//     console.log("Loop iteration:", count);
// }


// // -----------QUESTION NO 5--------------

// for (var i = 3; i > 0; i--) {

//     console.log("Loop iteration:", i);
// }


// // -----------QUESTION NO 6--------------

// var myArray = [1, 2, 3, 4, 5, 6, 7];
// var arrayLength = myArray.length;
// console.log(arrayLength);


// // -----------QUESTION NO 7--------------

// var flag = true;


// // -----------QUESTION NO 8--------------

// var pets = ["dog", "cat", "ox", "duck", "frog"];
// for (var i = 0; i < pets.length; i++) {
//     console.log("Loop iteration:", i);
// }


// // -----------QUESTION NO 9--------------

// for (var i = 0; i < 10; i++) {
//     if (i === 1) {
//         alert("Counter value: " + i);
//         break;
//     }
// }


// // -----------QUESTION NO 10--------------

// var userNames = ["saad", "saim", "sameer", "sami"];
// var firstName = prompt("Enter first name");
// var userNameFound = false;
// for (var i = 0; i < userNames.length; i++) {
//   if (userNames[i] === firstName) {
//     userNameFound = true;
//     break;
//   }
// }
// if (userNameFound) {
//   alert("Enter");
// } else {
//   alert("Please write correct user name");
// }

// // -----------QUESTION NO 11-------------

// var matchFound = false;
// for (var i = 0; i < list.length; i++) {
//   if (userInput === list[i]) {
//     alert("Match found");
//     matchFound = true;
//     break;
//   }
// }
// if (!matchFound) {
//   alert("No match found");
// }


// // -----------QUESTION NO 12--------------

// var firstArr = ["a", "b", "c", "d", "e", "f"];
// var secondArr = [1, 2, 3, 4, 5, 6];

// for (var i = 0; i < firstArr.length; i++) {
//   for (var j = 0; j < secondArr.length; j++) {
//     console.log(firstArr[i] + secondArr[j]);
//   }
// }

// *******************THE END*****************