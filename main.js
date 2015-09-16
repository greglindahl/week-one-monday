//JS Workshop Monday 9/14

// Log all answers to the console and write them to document
// =======================================================

//1. Log your name to the console (as a string).
console.log('Greg Lindahl');
document.write('<h1>Greg Lindahl</h1>');

//2. Declare a variable called name, log it to the console.
var name = 'Greg Lindahl';
console.log(name);

//3. Declare two variables with number values. Add, subtract, multiply and divide them.
var num1 = 2;
var num2 = 4;
console.log(num1 + num2, num1 - num2, num1 * num2, num1 / num2);

//4. Declare two variables with string values. Create a third variable that concatenates them.
var numString1 = '5';
var numString2 = '6';
var combineNum = numString1 + numString2;
console.log(combineNum);

//5. Add, subract, multiply and divide the strings '5' and '3'. Observe and explain the results.
console.log('5' + '3', '5' - '3', '5' * '3', '5' / '3');
//The + operator concatenated 5 and 3 to make 53, the rest of the operators performed the documented problems.

//6. Create a prompt that asks a user to pick a number. Double the answer.
var input = prompt('Type a number, any number!');
var answer = input * 2;
console.log(answer);

//7. Create a custom alert.
alert('This is a custom alert :)');

//8. Declare three variables called length, width and height. Calculate area and volume.
var length = 3;
var width = 4;
var height = 5;
var areaComp = (length * width) + (length * height) + (height * width);
var area = areaComp * 2;
var volume = length * width * height;
console.log(area, volume);

//9. Ask for a user's name, age and city. In a single command display/log the sentence:
// "My name is...I'm....years old, and I live in....."
var userName = prompt("What's your name?");
var userAge = prompt("How old are you?");
var userCity = prompt("What city do you live in?");
var userAnswers = "My name is " + userName + ", " + "I'm " + userAge + " years old, and I live in " + userCity;
console.log(userAnswers);

//10. Create an alert that uses the response from a prompt.
var alertPrompt = prompt("What's your name?");
alert(alertPrompt);
