class Animal {
  #name;
  #species;
  #energy;

  static remainingAnimals = 0;

  constructor(name, species, energy) {
    Animal.remainingAnimals++;
    this.#name = name;
    this.#species = species;
    this.#energy = energy;
  }

  get name() {
    return this.#name;
  }

  set name(newName) {
    return (this.#name = newName);
  }

  get species() {
    return this.#species;
  }

  set species(newSpecies) {
    return (this.#species = newSpecies);
  }

  get energy() {
    return this.#energy;
  }

  set energy(newEnergy) {
    return (this.#energy = newEnergy);
  }

  attack(target) {
    if(target.energy <= 0 && this.energy <= 0) {
      console.log(`Animals with no energy cannot attack.\n`)
      return;
    }

    if (target.energy > 0 && this.energy > 0) {
      console.log(`${this.name} swoops in to attack ${target.name}!`);
      console.log(`${this.name}'s energy: ${this.energy}`);
      console.log(`${target.name}'s energy: ${target.energy}\n`);
    } else if (target.energy <= 0) {
      console.log(`${this.name} swoops in to attack ${target.name}!`);
      console.log(`${this.name}'s energy: ${this.energy}`);
      console.log(`${target.name}'s energy: 0`);

      console.log(`${this.#name} wins! ${target.name} is out of energy\n`);
      Animal.remainingAnimals--;
    } else if (this.energy <= 0) {
      console.log(`${this.name} swoops in to attack ${target.name}!`);
      console.log(`${this.name}'s energy: 0`);
      console.log(`${target.name}'s energy: ${target.energy}`);

      console.log(`${target.name} wins! ${this.#name} is out of energy.\n`);
      Animal.remainingAnimals--;
    } 
  }

  eat() {
    console.log(
      `${this.name} eats and gains energy! ${this.name}'s energy: ${this.energy} `
    );
  }
}

class Bird extends Animal {
  #canFly;

  constructor(name, species, canFly) {
    super(name, species, 100);
    this.#canFly = canFly;
  }

  get canFly() {
    return this.#canFly;
  }

  set canFly(boolean) {
    return (this.#canFly = boolean);
  }

  attack(target) {
    target.energy -= 20;
    this.energy -= 20;

    super.attack(target);
  }

  eat() {
    this.energy += 10;
    super.eat();
  }
}

class Mammal extends Animal {
  #furColor;

  constructor(name, species, furColor) {
    super(name, species, 200);

    this.#furColor = furColor;
  }

  get furColor() {
    return this.#furColor;
  }

  set furColor(newFurColor) {
    return (this.#furColor = newFurColor);
  }

  attack(target) {
    target.energy -= 50;
    this.energy -= 50;
    super.attack(target);
  }

  eat() {
    this.energy += 20;
    super.eat();
  }
}

class Reptile extends Animal {
  #coldBlooded;

  constructor(name, species, coldBlooded) {
    super(name, species, 100);

    this.#coldBlooded = coldBlooded;
  }

  get coldBlooded() {
    return this.#coldBlooded;
  }

  set coldBlooded(boolean) {
    return (this.#coldBlooded = boolean);
  }

  attack(target) {
    target.energy -= 30;
    this.energy -= 30;

    super.attack(target);
  }

  eat() {
    this.energy += 15;
    super.eat();
  }
}

// DRIVER CODE: Create instances of the subclasses and use their properties and methods. You can modify this to add more attacks and eating actions.

const eagle = new Bird("Eagle", "Bird of Prey", true);
console.log(
  `Name: ${eagle.name}, Species: ${eagle.species}, Can Fly: ${eagle.canFly}`
);

const lion = new Mammal("Lion", "Big Cat", "Golden");
console.log(
  `Name: ${lion.name}, Species: ${lion.species}, Fur Color: ${lion.furColor}`
);

const snake = new Reptile("Snake", "Serpent", true);
console.log(
  `Name: ${snake.name}, Species: ${snake.species}, Cold-Blooded: ${snake.coldBlooded}`
);

// Example attack
console.log("\n--- Attacks ---");
eagle.attack(lion);
lion.attack(snake);

// Display the remaining number of animals with energy
console.log(`Remaining animals with energy: ${Animal.remainingAnimals}`);

// Example eating
console.log("\n--- Eating ---");
eagle.eat();
lion.eat();
snake.eat();

// Add attack
console.log("\n--- Attacks ---");
lion.attack(snake);
snake.attack(eagle);
// console.log(`Remaining animals with energy: ${Animal.remainingAnimals}`);

// console.log("\n--- Attacks ---");
// eagle.attack(lion);
// lion.attack(eagle);
// console.log(`Remaining animals with energy: ${Animal.remainingAnimals}`);