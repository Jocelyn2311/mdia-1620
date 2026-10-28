// Welcome!
//
//                                                  #    #
//                                             %%% ##   ##
//                                          %%%%% ###%🎀###
//                                         %%%%% ### %%% #
//                                       %%%%%% ### %%% ###
//                                        %%%% ## %% #######
//                                       %%%%% # %% #@#####
//                                     %%%%%% # % #########
//                                    %%%%% ##### #########
//                          ###        %% ####### #########
//                 %%% ############    ########### ########
//              %%%% ############################### #######
//            %%%%% ################################## ######
//          %%%%%% #################################### #C###
//         %%%🌸%% #####################################  ###
//         %%%%% #######################################
//        %%%%%% ############### BEANS ##################
//     % %%%%%%% ############### BEANS ##################
//      %%%%%%%%% ############## BEANS ##################
//     %%%%%%%%%% ########################################
//  %%% %%%%%%%%   ###### ################################
//    %%%%%%%%      ###### #################### ##########
// % %%%🌸%%%%        ####### ########### ###### ##########
//  %%%%%%%%%         #######  ########### ###### ########
// %%%%%%%%%%          ##### ###  ######### ####### ######
//  %%%%%%%%%%          #### ##               ####### ####
//  %🌸%%%%%%%%%           ## #                  ##### ###
//   %%  %% % %%         # ##                      ## ###
//     %   %    %        # ###                      # ###
//                        # ###                     ## ###
//                        # ###                     ## ###
//                        # ####                   #### ##
//                       ### ###                  ##### ###
//                      ####  ###                 ####   ##
//                     #####   ###                 ##    ##
//                    #####    ####                      ###
//                     ##        ###                     ###
//                                ####                     ##
//                                 ####                    ###
//                                                         ####
//                                                          ##
//
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


// let mangoMonthlyRent = 200;
// let mango = {
//     name: "Mango",
//     age: 11,
//     favouriteSnack: "potato",
//     monthlyRent: mangoMonthlyRent,
//     latePayment: mangoMonthlyRent + ( mangoMonthlyRent * 0.2 ),
// };

// let bombadilocrocodiloMonthlyRent = 500;
// let bombadilocrocodilo = {
//     name: "Bombadilocrocodilo",
//     age: 6,
//     favouriteSnack: "cucumber",
//     monthlyRent: bombadilocrocodiloMonthlyRent,
//     latePayment: bombadilocrocodiloMonthlyRent + ( bombadilocrocodiloMonthlyRent * 0.2 ),
// };

// let lananhMonthlyRent = 10;
// let lananh = {
//     name: "Lananh",
//     age: 20,
//     favouriteSnack: "watermelon",
//     monthlyRent: lananhMonthlyRent,
//     latePayment: lananhMonthlyRent + ( lananhMonthlyRent * 0.2 ),
// };

// let stableName = "Assignment 1";
// let welcomeMessage = (`Welcome to ${stableName}!`);

// console.log(welcomeMessage);

// console.log(`${bombadilocrocodilo.name}'s monthly payment is late. The amount owning is $${bombadilocrocodilo.latePayment}.`);


//MAKING CHANGES TO THIS FILE FOR THIS NEW BRANCH
//MAKING another change to this file!

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


//object-An object stores related information using properties
let horse1 = {
    name: "mango",
    nickName: "xoai",
    favoriteTreat: "candy",
    age: 12,
    monthlyRent: 20,
    isHorseInside: true,
    favoriteFood: "pho",
    favoriteDrink: "matcha",
}

let horse2 = {
    name: "strawberry",
    nickName: "dau",
    favoriteTreat: "cheestos",
    age: 8,
    monthlyRent: 16,
    isHorseInside: true,
    favoriteFood: "chicken",
    favoriteDrink: "water",
}

let horse3 = {
    name: "banana",
    nickName: "chuoi",
    favoriteTreat: "twix",
    age: 10,
    monthlyRent: 22,
    isHorseInside: true,
    favoriteFood: "nugget",
    favoriteDrink: "coffee",
}

let horse4 = {
    name: "butter",
    nickName: "bo",
    favoriteTreat: "kitkat",
    age: 3,
    monthlyRent: 2,
    isHorseInside: false,
    favoriteFood: "burger",
    favoriteDrink: "redbull",
}

horse1.isHorseHungry = true;
horse2.isHorseHungry = false;
horse3.isHorseHungry = true;
horse4.isHorseHungry = false;

//Array-definition: An array stores multiple values
let horses = [horse1, horse2, horse3];

horses.push(horse4);

console.log(horses.length);

let totalStalls = 50;
//functions-a function is a reusable block of code that performs a task
function stallsAvailable(totalStalls, numberOfHorses) {
    console.log(totalStalls - numberOfHorses);
}

stallsAvailable(totalStalls, horses.length);

let lateFeeRate = 0.20;

function horsesRent(horse, feeRate) {
    console.log(horse.monthlyRent * (1 + feeRate));
}

horsesRent(horse3, lateFeeRate);
//Return Nickname, then log it outside the function.
function nickName(horse) {
    return horse.nickName;
}

let horseNickName = nickName(horse2);

console.log(horseNickName);