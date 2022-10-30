const menu = {
  
    _courses: {
      appetizers: [],
      mains: [],
      desserts: [],
      get getAppetizers(){
        return this._appetizers;
      },
      get getMains(){
        return this._mains;
      },
      get getDesserts(){
        return this._desserts;
      },
      set setAppetizers(food){
        this._appetizers = food;
      },
      set setMains(food){
        this._mains = food;
      },
      set setDesserts(food){
        this._desserts = food;
      }
    },
    
    get getCourses(){
      return {
        appetizers: this.getAppetizers,
        mains: this.getMains,
        desserts: this.getDesserts
      };
    },
    
    set setCourses(courses){
      this._courses = courses;
    },
    
    addDishToCourse(courseName, dishName, dishPrice)   {
      let dish = {
        name: dishName,
        price: dishPrice
      };
      this._courses[courseName].push(dish);
    },
    
    getRandomDishFromCourse(courseName){
      let randomIndex = Math.floor(Math.random() * this._courses[courseName].length);
      return this._courses[courseName][randomIndex];
    },
    
    generateRandomMeal(){
      const appetizer = this.getRandomDishFromCourse('appetizers');
      const main = this.getRandomDishFromCourse('mains');
      const dessert = this.getRandomDishFromCourse('desserts');
      const price1 = appetizer.price;
      const price2 = main.price;
      const price3 = dessert.price;
      const total = price1 + price2 + price3;
      return (`You ordered: ${appetizer.name}: ${price1} euros.
  You ordered: ${main.name}: ${price2} euros.
  You ordered: ${dessert.name}: ${price3} euros.
  Total: ${total} euros.`);
    }
    
  };
  
  
  // Create meals/dishes with method 'addDishToCourse'
  // 1. Appetizers
  menu.addDishToCourse('appetizers', "Caesar's Salad", 4.5);
  menu.addDishToCourse('appetizers', "Tomato-onion Salad", 3.5);
  menu.addDishToCourse('appetizers', "Super Salad", 5.5);
  // 2. Mains
  menu.addDishToCourse('mains', "Chicken fillet", 8.5);
  menu.addDishToCourse('mains', "Souvlaki portion", 6.5);
  menu.addDishToCourse('mains', "Extreme Burger", 7.5);
  menu.addDishToCourse('mains', "Lamb Chops", 9.5);
  // 3. Desserts
  menu.addDishToCourse('desserts', "Apple pie", 3.5);
  menu.addDishToCourse('desserts', "Cheese-cake", 4.5);
  menu.addDishToCourse('desserts', "Strawberry cake", 3.5);
  
  let meal = menu.generateRandomMeal();
  console.log(meal);