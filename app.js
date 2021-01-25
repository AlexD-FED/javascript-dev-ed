// VARIABLES

// How to write a variable: var = the old way
// Nowadays we use const and let

// var life = 100; // this is our life-bar

// life = life - 10;
// 100-10=90

// life = life / 10;
// 90/10=9

// var name = "AlexD-FED"; // this is the namen displayed in the game string
// var checkout = true; // boolean is either "true of false"
// var box = null; // null is rather than not having a value, the box has a value of nothing

// const life = 100; // const can't be modified. a const life = 100; will always be 100;
// const declarations are block scoped. const cannot be updated or re-declared.
// let lifeAge = 100; // let variable declared in a block is only available for use within that block.
// let can be updated but not re-declared.

// EXAMPLE BELOW OF A ADJUSTABLE LET VARIABLE

// let life = 100;

// life = life - 50;

// console.log(life);

// FUNCTIONS

// A function is a set of code that is going to do things for us.
// For example, eat is a function, because it has more steps. 1.going to kitchen, 2.prepare food
// 3.eat food 4.do dishes

// EXAMPLE BELOW
// const name = "ALexD-FED"; // Global scope

// function logger() { // Local scope
//    console.log('Party Time');
//    console.log('Party Time');
//    console.log('Party Time');
//    console.log('Party Time');
// }

// logger();

// () = in a function these are to inject variables form outside the function.

// EXAMPLE BELOW

// const name = "AlexD-FED";

// function adder(num1, num2) {
//    console.log(num1, num2); // means nothing now, since it has nog value.
// }

// adder(5,10); // gives the num1 and num2 value.

// EXAMPLE BELOW

// "AlexD-FED" will be completely upperCased with the below code

// const name = "AlexD-FED";
// const youtuber = "Mr. Beast";

// function toUpper(text) {
//     const upperCased = text.toUpperCase();
//     console.log(upperCased);
// }

// toUpper(name);
// toUpper(youtuber);

// EXAMPLE BELOW better way of writing functions

// function toUpper(text) {
//     const upperCased = text.toUpperCase();
//     console.log(upperCased);
// }

// toUpper = () => {

// }

// STRING CONCATENATIONS
// EXAMPLE 1
// const myAge = 38;

// const yourAge = 12;

// console.log(myAge+yourAge);

// EXAMPLE 2

// console.log("Hello my name is" + " " + "Alex");

// EXAMPLE 3
// const name = "Alex";
// const age = 38;

// console.log(`Hello my name is ${name}`); // Hello my name is Alex
// console.log("Hello my name is " + name + " and my age is " + age + " and I am getting older"); // String
// console.log(`Hello my name is ${name} and my age is ${age} and I am getting older`); // Prachtig geschreven string

// const combined = name + age;

// console.log(combined); // Alex38
// console.log(typeof combined);

// IF STATEMENTS - the way of checking and filtering out what actually needs to perform
// EXAMPLE - You want to now if age is 21 and up
// const age = 16;

// if(age > 18) {
//     console.log("You are good to go"); // is age over 18 than this output will be shown
// } else if(age < 15){
//     console.log("Wow you are way too young"); // but is age is younger than 15 than this output will be shown
// }
// else {
//     console.log("You are not old enough"); // or if teh age is 16 or 17 this output will be shown
// }

// EXAMPLE - === we use triple equals
// const dice1 = 6;
// const dice2 = 6;

// if(dice1 === 6 && dice2 === 6) { // && checks if both are correct-if you use || the code will check either one
//     console.log("You rolled double");
// } else {
//     console.log("You did not");
// }

// ARRAYS - are variables in wich you can store more variables ( use [] )
// we can store a lot: strings, numbers, booleans and objects
// EXAMPLE
// const schedule = ["Wake up", "Eat", "Film a video", "Netflix & Chill"]; // access array by number of index (o, 1, 2,..)
// console.log(schedule[3]); // output is Netflix & Chill
// schedule.push("Hey a new task got added"); // console.log(schedule); out put is that Hey.. is added to the array
// schedule.pop(); // this deletes the last index of the array
// schedule.shift(); // deletes the first index of the array
// schedule.unshift("a new one"); // adds a new item at the beginning of the array
// console.log(schedule);
// console.log(schedule.indexOf("Eat")); // with this code you can lookup index numbers
// EXAMPLE ARRAY
// const schedule = ["Wake up", "Eat", "Film a video", "Netflix & Chill"];

// const film = schedule.indexOf("Film a video");

// console.log(schedule[film]);

// OBJECTS and the keyword THIS
// You want to build a website with users:
// const user = {
//     name: "Alex",
//     age: 38,
//     married: true,
//     purchases: ["Vinyl", "Pioneers", "Ableton Live"]
// };

// console.log(user.purchases); // Basics objects code

// METHODS: a function that is attached to an object
// THIS = The JavaScript this keyword refers to the object it belongs to. In a function, this refers to the global object.
// In a function, in strict mode, this is undefined. In an event, this refers to the element that received the event.
// Methods like call (), and apply () can refer this to any object.
// EXAMPLE OF METHOD
// const user = {
//     name: "Alex",
//     age: 38,
//     married: true,
//     purchases: ["Vinyl", "Pioneers", "Ableton Live"],

//     sayName: function(){
//         console.log(this.name);
//     }
// };

// user.sayName();
// EXAMPLE DIFFERENCE WITH FUNCTION
// function sayMyAge(){
//     console.log(`My age is ${this}`);
// }

// sayMyAge();

// LOOP and WHILE LOOP
// const names = ["Alex", "Gaby", "Devin", "Stampertje"];

// for (name of names) {
//     console.log(`Hello there ${name}`); // the loop runs through all the way to the end of the array
// }

// for (name of names) {
//     console.log(name);
//     if (name === "Devin") {
//         console.log("Devin is in the list") // the loop runs through all the way to the end of the array and adds the log
//     }
// }

// EXAMPLE OF ENDING LOOP
// for (name of names) {
//     console.log(name);
//     if (name === "Devin") {
//         console.log("Devin is in the list") // to end the loop use break, its going to stop the loop at Devin
//         break;
//     }
// }

// EXAMPLE OF WHILE LOOP
// let loading = 0;

// while(loading < 100){
//     console.log("Website is still loading");

//     loading++;
// }

// DOM Manipulation

// In order for this to work you have to link also a css style sheet to the index.html
// <link rel="stylesheet" href="./style.css" />
// add tekst and button in the index.html
// const text = document.querySelector(".title");
// const changeColor = document.querySelector(".changeColor");

// text.style.color = "red";
// text.style.backgroundColor = "red";

// EXAMPLE OF ADDING CLASSES TO THE JAVASCRIPT - MAKE A CLASS IN CSS
// text.classList.remove("change"); // classList will access all the classes that the the text has

// EXAMPLE OF AN EVENT LISTENER - After we click the "call back function" gets run
// changeColor.addEventListener("click", function (){
//     text.classList.add("change");
// })

// EXAMPLE MANIPULATE EVERY USER IN USER LIST AND WHEN CLICKING THEM MAKE THEM RED
// const userList = document.querySelectorAll(".name-list li")

// for(user of userList){
//     user.addEventListener("click", function() {
//         this.style.color = "red";
//     })
// }

// console.log(userList);

// EXAMPLE MANIPULATE LIST INPUT
// const userList = document.querySelectorAll(".name-list li")
// const listInput = document.querySelector(".list-input");

// for (user of userList){
//     user.addEventListener("click", function() {
//         this.style.color = "red";
//     })
// }

// console.log(listInput.value);

// EXAMPLE MANIPULATE
const userList = document.querySelector(".name-list")
const listInput = document.querySelector(".list-input");
const addListBtn = document.querySelector(".addListBtn");

addListBtn.addEventListener("click", function() {
    // Create a Li out of thin air. Is simple
    const newLi = document.createElement("LI");
    const liContent = document.createTextNode(listInput.value);
    // Add the input value inside the new Li
    newLi.appendChild(liContent);
    // Attaching the Li to the user list
    userList.appendChild(newLi);
});
// Met deze laatste EXAMPLE kan je dus woorden/namen toevoegen aan de lijst


