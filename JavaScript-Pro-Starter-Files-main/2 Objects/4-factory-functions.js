let programmer = {
  name: "John",
  preferredLanguage: "JavaScript",
  writeCode: function () 
  {console.log(`${this.name} writes ${this.preferredLanguage} code`);},
  
  drinkCoffee() {console.log(`${this.name} drinks coffee.`);},
};

function createProgrammer(name,preferredLanguage ) {
  return {
    name,
    preferredLanguage,
    writeCode() {
      console.log(`${this.name} writes ${this.preferredLanguage} code.`);
    },
    drinkCoffee() {console.log(`${this.name} drinks coffee.`);},
  }
};
const newProgrammer = createProgrammer("Jane", "Python");

// Factory functions are a way to create objects in JavaScript.
newProgrammer.writeCode(); // Jane writes Python code
newProgrammer.drinkCoffee(); // Jane drinks coffee.