const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },
  get appetizers() {
     return this._courses.appetizers;
  },
  get mains() {
       return this._courses.mains;   
  },
  get desserts() {
     return this._courses.desserts;     
  },
  set appetizers(appetizers) {
    this._courses.appetizers = appetizers;
  },
  set mains(mains) {
    this._courses.mains = mains;
  },
  set desserts(desserts) {
    this._courses.desserts = desserts;
  },
  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    };
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    return this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse("appetizers");
    const main = this.getRandomDishFromCourse("mains");
    const dessert = this.getRandomDishFromCourse("desserts");
    const totalPrice = appetizer.price + main.price + dessert.price;

    return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}. The price is $${totalPrice}.`;
  },
}

menu.addDishToCourse("appetizers", "Steak Tartare", 12);
menu.addDishToCourse("appetizers", "Foie Gras", 15);
menu.addDishToCourse("appetizers", "Prawns À Guilho", 10);
menu.addDishToCourse("mains", "Moussaka", 7);
menu.addDishToCourse("mains", "Bacalhau à Brás", 12);
menu.addDishToCourse("mains", "Bitoque", 10);
menu.addDishToCourse("desserts", "Panna Cotta", 5);
menu.addDishToCourse("desserts", "Pavlova", 5);
menu.addDishToCourse("desserts", "Chocolate Truffle", 2);

const meal = menu.generateRandomMeal()
console.log(meal)
menu.addDishToCourse("appetizers", "Steak Tartare", 12);
menu.addDishToCourse("appetizers", "Foie Gras", 15);
menu.addDishToCourse("appetizers", "Prawns À Guilho", 10);

menu.addDishToCourse("mains", "Moussaka", 7.5);
menu.addDishToCourse("mains", "Bacalhau à Brás", 12);
menu.addDishToCourse("mains", "Bitoque", 10);

menu.addDishToCourse("dessert", "Panna Cotta", 5);
menu.addDishToCourse("dessert", "Pavlova", 5);
menu.addDishToCourse("dessert", "Chocolate Truffle", 2);

const meal = menu.generateRandomMeal()
console.log(meal)
