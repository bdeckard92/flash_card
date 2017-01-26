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

    prompt: "Would you like to make a flashcard?"

        if (this.val === yes) {
            inquirer.prompt([{
                name: "front",
                message: "What question will go on the front of your card?"
            }, {
                name: "back",
                message: "What answer will go on the back of your card"
            }]).then(function(input) {

                var newCard = new Flashcard(
                    input.front,
                    input.back);


                newCard.printInfo();


                askQuestion();
            });
        }






        //console.log("A new Flash Card was created");

};

// call askquestion to run our code
askQuestion();
