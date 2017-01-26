// dependency for inquirer npm package
var fs = require("fs");
var inquirer = require("inquirer");
var json = require("./basic.json")
var userIn = 
console.log(5 + 6);
// constructor function used to create programmers objects
function Flashcard(front, back) {
    this.front = front;
    this.back = back;

}

// creates the printInfo method and applies it to all programmer objects
Flashcard.prototype.printInfo = function() {
    console.log(this.front, this.back);
};

// variable we will use to count how many times our questions have been asked


var askQuestion = function() {

    prompt: "Would you like to make a flashcard?"

    if (yes) {
       inquirer.prompt([
       {
        name: "front",
        message: "What question will go on the front of your card?"
      }, {name: "back",
        message: "What answer will go on the back of your card"
      }
    }]).then(function(input) {
        // initializes the variable newguy to be a programmer object which will take
        // in all of the user's answers to the questions above
        var newCard = new Flashcard(
            input.front,
            input.back);

        // printInfo method is run to show that the newguy object was successfully created and filled
        newCard.printInfo();

        // run the askquestion function again so as to either end the loop or ask the questions again
        askQuestion();
    });
    }


       



    //console.log("A new Flash Card was created");

};

// call askquestion to run our code
askQuestion();
