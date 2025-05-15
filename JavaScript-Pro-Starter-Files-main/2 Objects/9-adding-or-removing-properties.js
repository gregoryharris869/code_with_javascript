const person = {
  name: "Greg"
};

console.log(person);

person.favoriteFood = "tacos";
console.log(person);

person[ "favoriteIceCream" ] = "Chocolate";
console.log(person);

delete person.favoriteIceCream;
console.log(person);

person.eat = function () {
  console.log(`${this.name} eats ${this.favoriteFood}.`);
};

person.eat();

// Lesson
function GroceryItem(name, quantity) {
  this.name = name;
  this.quantity = quantity;
  this.display = function () {
    console.log(`${this.quantity} X ${this.name}`);
  };
}

const newItem = new GroceryItem("Banana", 5);
newItem.groceryAisle = "Produce";
console.log(newItem);