// Create a program that tracks items added to a shopping cart.
//
// Initialize the program with an array of objects, representing a cart that already contains 3 items, 
// where each object represents an item with a name (string) and a price (number).
//
// There should be a function that accepts:
// - the array of objects representing items in the cart 
// - an object representing an item to add, also containing a name and price.
// 
// The function should:
// - add a new entry to the array of items in the cart
// - log out a message that lets the user know the name of the item added to the cart
// - return the total number of items in the cart.
//
// Separately, use the return value of the function to log out how many items are in the cart.
//
// BONUS: Inside the function, log out "You can no longer use the express checkout!"
// if there are 7 or more items in the cart.

let cart1 = {
    name: "Xoai",
    price: 10,
}

let cart2 = {
    name: "Snack",
    price: 5,
}

let cart3 ={
    name: "Rice",
    price: 20,
}

let cart = [cart1, cart2, cart3];

//Create a new item
let newItem = {
    name: "Bombadilocrocodilo",
    price: 67,
}

//Function to add item to the cart
function addToCart(cart, item) {
    //add a new item for it
    cart.push(item);
    //Print out the name of item i want
    console.log(item.name + " was added.");
    //Bonus

    let numberOfItems = cart.length;

    if (numberOfItems >= 7) {
        console.log("You can no longer use the express checkout!");
    }
    
    //Return the number of item
    return numberOfItems;
}

//call the function
let totalItems = addToCart(cart, newItem);

//print the total item
console.log(totalItems);