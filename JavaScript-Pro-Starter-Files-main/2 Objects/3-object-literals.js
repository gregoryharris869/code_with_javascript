let programmer = {
  name: "John",
  preferredLanguage: "JavaScript",
  writeCode: function () {console.log(`${this.name} writes ${this.preferredLanguage} code.`);},
  
  drinkCoffee() {console.log(`${this.name} drinks coffee.`);},
};

// programmer.writeCode();
// programmer.drinkCoffee();

// Example of using the object

const groceryListItem = {
  name:"Apples",
  quantity: 4,
display () {
  console.log(`You need to buy ${this.quantity} X ${this.name}.`);
  }
}

groceryListItem.display();
  




