// CONST & LET

let name = "Jhon"
name = "Jack"
console.log(name)

const person = {
  name: "Jhon",
  age: 33,
}
// person = {
//   name: "Ravi",    // This will give error we can't create object person cause we already have above with const keyword
// }
person.name = "Jack" // But we can manipulate existing obj ect even it is a const
console.log(person)

const nums = [1, 2, 3, 4]
nums.push(5)

console.log(nums)

// ARROW FUNCTIONS

// Normal function
function sayHello() {
  console.log("Hello")
}
sayHello()

const sayHello = () => {
  console.log("arrow function")
}

// OR

const sayHello = () => console.log("arrow function when we have no parameter")
sayHello()

// const sayHello = (name) => console.log("Hello " + name)
// sayHello("Ravi")

//OR
const sayHello = (name) => console.log(`Hello  ${name}`)
sayHello("Ravi")

const fruits = ["Apples", "Oranges", "Grapes"]

// FOREACH
fruits.forEach((fruit, index) => console.log(fruit))

// MAP
const singleFruit = fruits.map((fruit) => fruit.slice(0, -1).toUpperCase())
//console.log(singleFruit)

// FILTER
const people = [
  { id: 1, name: "Ravi" },
  { id: 2, name: "Amit" },
  { id: 3, name: "Sumeet" },
]

const people2 = people.filter((person) => person.id !== 2)
console.log(people2)

// SPREAD
const arr = [1, 2, 3]
const arr2 = [...arr, 4]
const arr3 = [...arr.filter((num) => num !== 2)]

console.log(arr3)
// console.log(arr2)

const newPerson = {
  ...person,
  email: "rprajapati067@gmail.com",
}
console.log(newPerson)

// DESTRUCTRUING

const profile = {
  name: "Ravi Shankar",
  address: {
    street: "40 main street",
    city: "Boston",
  },
  hobbies: ["movies", "music"],
}

const { name, address, hobbies } = profile
const { street, city } = profile.address
//console.log(name, address, hobbies[0], street)
console.log(street, city)

// CLASSES
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age}`
  }
}

const person1 = new Person("Jhon", 23)
const person2 = new Person("Sara", 25)

console.log(person1.name, person1.age)
console.log(person2.name, person2.age)

// SUBCLASSES
class Customer extends Person {
  constructor(name, age, balance) {
    super(name, age)
    this.balance = balance
  }
  info() {
    return `${this.name} owes ${this.balance}.00`
  }
}

const customer1 = new Customer("Ravi", 27, 300)
console.log(customer1.info())

// MODULES

// file 1 (file1.js)
export const name = "Ravi"
export const nums = [1, 2, 3]
export default Person

// file 2 (file2.js)
import { name, nums } from "./file1"
import Person from "./file1"
