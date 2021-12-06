

function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = function() {
        if (read) {
            return true;
        } else {
            return false;
        }
    },
    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${read}`;
    }
}

const book1 = new Book("The Hobbit", "J.R.R. Tolkien", "295", "read");

let libraryArray = [
    {
        title: "Dune",
        author: "Frank Herbert",
        pages: 884,
        read: false
    }, 
    {
        title: "Wizard's First Rule",
        author: "Terry Goodkind",
        pages: 836,
        read: true
    }, 
    {
        title: "Ender's Game",
        author: "Orson Scott-Card",
        pages: 324,
        read: true
    }
];

function addBookToLibrary() {
    /*
    1. accept form input
    2. create new book object from form input
    3. add new book object to libraryArray
    */
}

function displayBooks() {

    /*
    1. loop through libraryArray
    2. for each book object, create a book div inside libraryContainer (querySelector needed)
    3. for each book div created, create child elements
    */

}

function removeBookFromLibrary() {

}

function changeReadStatus() {
    this.read = !this.read;
}

console.log(libraryArray);

// Prototypes

// Prototype Property
/*

function PrintStuff (myDocuments) {
    this.documents = myDocuments;
}


// add the print () method to PrintStuff () constructor so that other instances can inherit it

PrintStuff.prototype.print = function () {
    console.log(this.documents);
}


// Use PrintStuff () constructor to create a new object, which will inherit PrintStuff's properties and methods 

const newObject = new PrintStuff ("I am a new object, and I can use the print method.");


// newObject inherited the addition of the print method to PrintStuff's prototype, and can now print

newObject.print(); // returns "I am a new object, and I can use the print method."

*/

// Constructors

// In the above examples, PrintStuff () was the constructor for newObject

/*

function Account () {
}

// for userAccount, the constructor is Account ()
const userAccount = new Account ();

// to find the constructor:

console.log(userAccount.constructor);

*/


// Prototype Attribute

// making an object with the new keyword or a constructor give the object a prototype of constructorName.prototype

/*
function Account () {

}

let userAccount = new Account ();
// Because the constructor is Account (), the prototype attribute or object will be Account.prototype
*/


// Prototype inheritance

// you can assign multiple prototypes to an object if it fits into multiple categories, like fruit and plant

/*

function Plant () {
    this.country = "Mexico";
    this.isOrganic = true;
}

// Add showNameAndColor method to Plant prototype property
Plant.prototype.showNameAndColor = function () {
    console.log("I am a " + this.name + " and my color is " + this.color);
}

function Fruit (fruitName, fruitColor) {
    this.name = fruitName;
    this.color = fruitColor;
}

// Set Fruit's prototype to Plant's constructor, allowing Fruit to inherit all Plant.prototype's methods and properties
Fruit.prototype = new Plant ();

// Create a new object with Fruit () constructor
var aBanana = new Fruit ("Banana", "Yellow");

// aBanana can use the Fruit properties, like name
console.log(aBanana.name); // returns Banana

// aBanana can also use Plant's properties, like showNameAndColor, because Fruit constructor's prototype inheritance
console.log(aBanana.showNameAndColor());

*/

// Prototype Inheritance exercises

/*
let head = {
    glasses: 1
};
  
let table = {
    __proto__: head,
    pen: 3
};
  
let bed = {
    __proto__: table,
    sheet: 1,
    pillow: 2
};
  
let pockets = {
    __proto__: bed,
    money: 2000
};

console.log(bed.glasses);
*/

/*
let hamster = {
  
    eat(food) {
      this.stomach.push(food);
    }
};
  
let speedy = {
    stomach: [],
    __proto__: hamster
};
  
let lazy = {
    stomach: [],
    __proto__: hamster
};
  
// This one found the food
speedy.eat("apple");
console.log(speedy.stomach); // apple
  
// This one also has it, why? fix please.
console.log(lazy.stomach); // apple
*/