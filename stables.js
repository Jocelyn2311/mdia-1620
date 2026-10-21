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


let mangoMonthlyRent = 200;
let mango = {
    name: "Mango",
    age: 11,
    favouriteSnack: "potato",
    monthlyRent: mangoMonthlyRent,
    latePayment: mangoMonthlyRent + ( mangoMonthlyRent * 0.2 ),
};

let bombadilocrocodiloMonthlyRent = 500;
let bombadilocrocodilo = {
    name: "Bombadilocrocodilo",
    age: 6,
    favouriteSnack: "cucumber",
    monthlyRent: bombadilocrocodiloMonthlyRent,
    latePayment: bombadilocrocodiloMonthlyRent + ( bombadilocrocodiloMonthlyRent * 0.2 ),
};

let lananhMonthlyRent = 10;
let lananh = {
    name: "Lananh",
    age: 20,
    favouriteSnack: "watermelon",
    monthlyRent: lananhMonthlyRent,
    latePayment: lananhMonthlyRent + ( lananhMonthlyRent * 0.2 ),
};

let stableName = "Assignment 1";
let welcomeMessage = (`Welcome to ${stableName}!`);

console.log(welcomeMessage);

console.log(`${bombadilocrocodilo.name}'s monthly payment is late. The amount owning is $${bombadilocrocodilo.latePayment}.`);


//MAKING CHANGES TO THIS FILE FOR THIS NEW BRANCH
//MAKING another change to this file!