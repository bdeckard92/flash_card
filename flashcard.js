var fs = require("fs");
var inquirer = require("inquirer");
var json = require("./basic.json")

console.log(5 + 6);

function Flashcard(front, back) {
    this.front = front;
    this.back = back;
}


Flashcard.prototype.printInfo = function() {
    console.log(this.front, this.back);
};

function ClozeCard(visible, invisible) {
    this.visible = visible;
    this.invisible = invisible;
}


var askQuestion = function() {

    prompt: "Would you like to make a flashcard?"//this question needs to go outside 
    //and be separate from the flash card or close maker and then call the proper function based on response.

        if (this.val === true) {
        inquirer.prompt([{
            type: "input",

            message: "What question will go on the front of your card?",
            name: "front",
        }, {
            type: "input",
            message: "What answer will go on the back of your card",
            name: "back"
        }]) elseif(this.val != true) {
            inquirer.prompt([{
                    type: "input",
                    m essage: "What part of the question would you like to reveal?",
                    name: "visible",
                }, {
                    type: "input",
                    message: "What part of the question would you like to hide?",
                    name: "invisible"
                }
            }])
    }.then(function(input) {

        var newCard = new Flashcard(
            input.front,
            input.back);


        newCard.printInfo();
        fs.writeFile("basic.json", "newCard", function(err, data) {
            if (err);
            console.log(err);
        });


        askQuestion();
    });
}






//console.log("A new Flash Card was created");

};

// call askquestion to run our code
askQuestion();
