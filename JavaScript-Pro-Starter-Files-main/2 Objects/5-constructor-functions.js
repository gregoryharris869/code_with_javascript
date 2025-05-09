"use strict";

// lesson

function Programmer( name, preferredLanguage) {
  this.name = name;
  this.preferredLanguage = preferredLanguage;
  this.writeCode = function() {
    console.log(`${this.name} is writing code in ${this.preferredLanguage}`);
  };
  this.drinksCoffee = function() {
    console.log(`${this.name} drinks coffee.`);
  };
};

const newProgrammer = new Programmer("John", "JavaScript");
// newProgrammer.writeCode(); // John is writing code in JavaScript
// newProgrammer.drinksCoffee(); // John drinks coffee.
console.log(newProgrammer.constructor); // John

// Exercise

// function GroceryItem (name,quantity) {
//   this.name = name;
//   this.quantity - quantity;
//   this.display = function() {
//     console.log(`${this.quantity} X ${this.name}`);
//   };
// };

// const newItem = new GroceryItem(5 , "Apples");
// newItem.display();