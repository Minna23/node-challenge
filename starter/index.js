const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'The name of your project:',
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
    name: 'github',
    message: 'Your GitHub username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Your email address:',
  },
  
  {
    type: 'list',
    name: 'license',
    message: 'What kind of license you would like to chose?',
    choices: ["MIT", "APACHE 2.0", "GPL", "None"],
  },  
  {
    type: 'input',
    name: 'test',
    message: 'What command will run the test?',
    default: 'npm test'
  }
];

// function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data)
//    const generateHTML = (answers) =>
        //var md = require('markdown-it')();
        //var result = md.render('# markdown-it rulezz!');
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then((response) => {
    console.log("Generating a README...⌛")
    writeToFile('README.md', generateMarkdown({...response}))
  })
}

// function call to initialize program
init();
