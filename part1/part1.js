//STEP 1
var number;

function halfNumber() {
    "use strict";
    window.document.write("Half of " + number + " is " + number / 2 + ".<br>");
}

number = parseFloat(window.prompt("STEP 1. Half of a number. \nEnter a number:"));
halfNumber();

//Step 2

var number;
function squareNumber() {
    "use strict";
    window.document.write("The result of squaring a number " + number + " is " + number * number + ".<br>");
}

number = parseFloat(window.prompt("STEP 2. Squaring a number. \nEnter a number:"));
squareNumber();

//STEP 3
var first, second;

function percentOf() {
    "use strict";
    window.document.write(first + " is " + first / second * 100 + "% of " + second + ".<br>");
}

first = parseFloat(window.prompt("STEP 3. Percent the first number represents of the second number. \nEnter a first number:"));
second = parseFloat(window.prompt("Enter a second number:"));
percentOf();

//STEP 4
var n1;
var n2;

function findModulus() {
    "use strict";
    var mod = n1 % n2;
    window.document.write(mod + " is the modulus of " + n1 + " and " + n2 + ".<br>");
}

n1 = parseFloat(window.prompt("STEP 4. The modulus of the two numbers. \nEnter a first number:"));
n2 = parseFloat(window.prompt("Enter a second number:"));
findModulus();

//STEP 5
function additionOf(numValues) {
    'use strict';
    var num = window.prompt("Enter" + numValues + " numbers separated by comma");
    var numArr = num.split(",").map(function (item) {
        return parseInt(item, 10);
    });

    var sum = numArr.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
    });
    window.document.write("Sum of these four numbers: " + sum);
}
additionOf(4);