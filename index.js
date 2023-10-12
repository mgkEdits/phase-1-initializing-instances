// Write your code here

class Breakfast {
    constructor(food, drink) {
      this.food = food;
      this.drink = drink;
    }
  }

  class Lunch {
    constructor(salad, soup, drink) {
      this.salad = salad;
      this.soup = soup;
      this.drink = drink;
    }
  }

  class Dinner {
    #dessert;
    constructor(salad, soup, entree, dessert) {
      this.salad = salad;
      this.soup = soup;
      this.entree = entree;
      // Initialize dessert as a private property
      this.#dessert = dessert;
    }
  
    // Getter method to access the private dessert property
    getDessert() {
      return this.#dessert;
    }
  }
  
  