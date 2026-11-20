// This is a template for your assignments and final project. You'll be setting up a stable and making
// sure it runs smoothly.
//
// Please do not create a new file for each assignment!
// Feel free to keep the headings (e.g.: "Variables"), but please delete any boilerplate
// comments. E.g.: those seen on lines 58 - 68, for example. They are usually providing directions.
// (Your own comments, where necessary, are acceptable.)
//
// NOTE: UNLESS SPECIFIED, VARIABLE NAMING IS UP TO YOU. THERE SHOULD BE NO HARD-CODED
// NUMBERS OR STRINGS WHERE VARIBALES WOULD BE PREFERRED.

//------------------------- Seting up shop (Assignment 1) -------------------------//

// Store information about three horses in your stables.
// Each horse should have the following information associated with it:
//
// - the name of a horse at your stable
// - the age of the horse
// - what the horse likes to snack on
// - the cost to board the horse monthly
// - the fee for a late payment (monthly rate + 20%)
//
// Create a variable and use it to store the name of your stable.
// Create a variable and use it to store a message for visitors to the stable as a string. It should include the name of your stable.
// Create a variable and use it to store a message that monthly payment is late, and the amount owing. Include the name of one of your horses in the message.

//------------------------- First day (Assignment 2) -------------------------//

// Move the horses in your stables into objects, if they aren't already. Each horse should have its own object.
// (After you are done, your horse variables from Assignment 1 should be deleted)
//
// The horses should have the following properties:
// - name, nickname, favorite treat (string)
// - age, monthly rent (number)
// - location (boolean inside/outside)
// - two unique properties of your choice (use any primitive)

// Store the horses you've just created in a "horses" array.

// Fancy! Another horse wants to be stabled! Create a variable that stores an object
// literal of your new horse, and add it to your "horses" variable.

// Initialize new property to your horses: a boolean that allows you to check if your horse
// is hungry or not. Use dot notation.

// Create a variable that stores your total number of stalls.
// Create a function that logs out how many stalls are available, given how many horses you have in your stable.

// Create a function that logs out how much will an individual horse will owe if rent is
// paid late. Invoke the function.

// Create and invoke a function that returns (not logs) the nickname of a chosen horse. Log out
// the return value outside of the function.

//------------------------- Day to day operations (Project) -------------------------//

// Add loop that checks to find out if a certain horse likes a particular treat. If the horse does not like
// the treat, log out their disatisfaction and check the next horse. Exit the loop when you find
// the horse that likes the treat.

// Create a function references one of your unique horse properties. It should
// contain a conditional or a loop. Invoke it for each horse.

// Morning! Create and invoke a function that moves any number horses of your choice outside. It should
// log out statement indicating the horses have been moved to spend time in the sun.
// (The function should be able to move a single horse, or multiple horses, depending on the parameters specified)

// Food! Create and invoke a function that feeds your horses. If the horse is outside, it
// should call them in, and then all horses should be fed a treat. Log the activity of
// the horses.

// Bedtime! Update the function that lets your horses outside so that it also calls them
// in if it is getting dark. Only the horses that moved should log out a message. Invoke the function.

//------------------------- Bonus -------------------------//

// Replace the ascii art at the top of the file with art representing your stable.
// Initialize a method on your horses that moves them inside if they are outside, and
// vice versa.

let horse1 = {
    name: "Mango",
    nickName: "Xoai",
    favoriteTreat: "candy",
    age: 12,
    monthlyRent: 20,
    isHorseInside: true,
    favoriteFood: "pho",
    favoriteDrink: "matcha",
};

let horse2 = {
    name: "Strawberry",
    nickName: "Dau",
    favoriteTreat: "cheestos",
    age: 8,
    monthlyRent: 16,
    isHorseInside: true,
    favoriteFood: "chicken",
    favoriteDrink: "water",
};

let horse3 = {
    name: "Banana",
    nickName: "Chuoi",
    favoriteTreat: "kitkat",
    age: 10,
    monthlyRent: 22,
    isHorseInside: true,
    favoriteFood: "nugget",
    favoriteDrink: "coffee",
};

let horse4 = {
    name: "Butter",
    nickName: "Bo",
    favoriteTreat: "twix",
    age: 3,
    monthlyRent: 2,
    isHorseInside: false,
    favoriteFood: "burger",
    favoriteDrink: "redbull",
};

horse1.isHorseHungry = true;
horse2.isHorseHungry = false;
horse3.isHorseHungry = true;
horse4.isHorseHungry = false;

let horses = [horse1, horse2, horse3];

horses.push(horse4);

console.log(horses.length);

let totalStalls = 50;

function stallsAvailable(totalStalls, numberOfHorses) {
    console.log(totalStalls - numberOfHorses);
}

stallsAvailable(totalStalls, horses.length);

let lateFeeRate = 0.2;

function horsesRent(horse, feeRate) {
    console.log(horse.monthlyRent * (1 + feeRate));
}

horsesRent(horse3, lateFeeRate);

function nickName(horse) {
    return horse.nickName;
}

let horseNickName = nickName(horse2);

console.log(horseNickName);

let selectedTreat = "twix";

function findTreat(horses, selectedTreat) {
    for (const horse of horses) {
        if (horse.favoriteTreat === selectedTreat) {
            console.log(horse.name + " likes " + selectedTreat);
            return;
        } else {
            console.log(horse.name + " does not like " + selectedTreat);
        }
    }
}

findTreat(horses, selectedTreat);

let selectedDrink = "redbull";

function checkDrink(horse, selectedDrink) {
    if (horse.favoriteDrink === selectedDrink) {
        console.log(horse.name + " likes " + selectedDrink);
    } else {
        console.log(horse.name + " does not like " + selectedDrink);
    }
}

checkDrink(horse1, selectedDrink);
checkDrink(horse2, selectedDrink);
checkDrink(horse3, selectedDrink);
checkDrink(horse4, selectedDrink);

let horsesToMove = [horse1, horse2, horse3, horse4];

let isDark = true;

function moveHorsesOutside(horsesToMove, isDark) {
    for (const horse of horsesToMove) {
        if (isDark === false && horse.isHorseInside === true) {
            horse.isHorseInside = false;
            console.log(horse.name + " is outside in the sun for morning! ");
        } else if (isDark === true && horse.isHorseInside === false) {
            horse.isHorseInside = true;
            console.log(horse.name + " is back inside for bedtime! ");
        }
    }
}

moveHorsesOutside(horsesToMove, isDark);

function feedHorses(horses) {
    for (const horse of horses) {
        if (horse.isHorseInside === false) {
            horse.isHorseInside = true;
            console.log(horse.name + " is back inside! ");
        }
        console.log(horse.name + " is eating " + horse.favoriteTreat);
    }
}
feedHorses(horses);
