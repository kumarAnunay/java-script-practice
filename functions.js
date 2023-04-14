// Function Statement:- A function statement is defined with the function keyword, followed by a name, followed by parentheses ()
function a() {
    console.log(`${a}`);
}

//Function expression:- Function Expression is a function assigned to a variable. In this function acts as value.
var b = function () {
    console.log(`${b}`);
}

// Difference between function statement and expression is hositing.

// Function Declaration:- Function statement also known as function decleration.
function c() {
    console.log(`${c}`);
}

//Annonymous Function:- A function without a name is annonymous function.
//Function statements requires a function name.
//Annonymous functions are used when function used as value.
var d = function () {
    console.log(`${d}`);
}

//Named function expression:- Named function expression is same as function expression just we give name after function keyword.
var e = function abc() {
    console.log(`${e}`);
}

//Difference between parameter and argument
//The values that are declared within a function when the function is invoked are known as an argument. Whereas, the variables that are defined when the function is declared are known as a parameter.

//First-class function:- The ability of functions to be used as values and assigned to a variable and can be passed as a argument to another function and can be returned from a function is known as First-class functions.
var f = function () {
    return function xyx() {

    };
}
console.log(f());


var g = function (para) {
    console.log(para);
}
function fun() {
    console.log("First-class functions");
}
g(fun());

//Arrow function:- Arrow function is one of the features introduced in the ES6 version of JavaScript. Arrow functions have shorter syntax than regular function expressions.
let myFunction = (a, b) => a * b;

//-------
var hello = function () {
    return "Hello World!";
}

let helloo = () => {
    return "Hello World!";
}
//-------

let hello = () => "Hello World!";

const hello = (val) => "Hello " + val;