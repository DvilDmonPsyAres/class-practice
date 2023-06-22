// Your code here
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  introduce = () => {
    console.log(`Hi, I'm ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.`)
  };

  static introducePeople = (arr) => {
    if(!Array.isArray(arr)) {
      const a = new Error("introducePeople only takes an array as an argument.")
      throw a;

    }
    for(const el of arr) {
      if(!(el instanceof Person)) {
        const b = new Error("All items in array must be Person class instances.");
        throw b;

      }
    }
    arr.forEach(el => {
      el.introduce()
    });

  }
}
let person1 = new Person("alan", "garza", "542")
let person2 = new Person("alejandro", "garza", "42")
let person3 = new Person("angel", "garza", "54")
let person4 = new Person("aron", "garza", "52")

Person.introducePeople([person1, person2, person3, person4]);
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Person;
} catch {
  module.exports = null;
}
