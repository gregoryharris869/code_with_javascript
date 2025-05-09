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

console.log(newProgrammer.constructor); // Programmer