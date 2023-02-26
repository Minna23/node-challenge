const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = () =>
inquirer.prompt([
  {
    type: 'input',
    name: 'title',
    message: 'The title of your Readme:',
  },
  {
    type: 'input',
    name:'description',
    message:'Give me a short description:'
  },
  {
    type: 'input',
    name: 'technologies',
    message: 'Technologies you used to your project:',
  },
  {
    type: 'input',
    name: 'deployed',
    message: 'Enter the link to the deployed application here.',
  },
  {
    type: 'input',
    name: '',
    message: '',
  },
  {
    type: 'input',
    name: '',
    message: '',
  },
  {
    type: 'input',
    name: 'Would you like to add a Table of contents?',
    message: '',
  },
]);
//When a user is prompted for information about the application repository, 
//a high-quality, professional README.md is generated with:
//The title of my project

//Sections entitled:

//Description

//Table of Contents

//Installation

//Usage

//License

//Contributing

//Tests

//Questions


// function to write README file
function writeToFile(fileName, data) {
//    const generateHTML = (answers) =>
        var md = require('markdown-it')();
        var result = md.render('# markdown-it rulezz!');
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
