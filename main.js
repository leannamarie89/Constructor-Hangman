var game = require("./game.js");
var wordCons = require("./word.js");
var letterCons = require("./letter.js");
var inquirer = require("inquirer");
var randomWord = game.randomWord;
var letterGuessed;
exports.letter;

var myWord = new wordCons.wordCons(game.randomWord);
var maxGuesses = 10;

function Guess(){
  console.log(myWord.toString());
  if (myWord.guesses.length >= maxGuesses){
    console.log('You lose');
  return; 
  }
  inquirer.prompt([{
    name: 'letter',
    type: 'text',
    message: 'Guess a letter:',
    validate: function(str){
    
      var regEx = new RegExp("^[a-zA-Z\s]{1,1}$");
      return regEx.test(str);
        }
    }]).then(function(letterInput){ 
        var letter = letterInput.letter; 
        myWord.findLetter(letter); 
          if(myWord.isComplete()){ 
          console.log('Correct!' + myWord.toString() + '!');
          return; 
          }
        console.log('-------------------\n'); 
        console.log('You have ' + (maxGuesses - myWord.guesses.length) + ' guesses left.')
        guess(); 
        }
  );
}

guess(); 