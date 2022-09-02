//  Include packages needed for this application
   
    const inquirer = require('inquirer');
    const fs = require('fs');
    const generate = require('./utils/generateMarkdown')
    const path = require('path');
    const licenses = ['None', 'MIT', 'BSD', 'GPL', 'Apache']

// Create an array of questions for user input
const questions=([
    {
        type: 'input',
        name: 'title',
        message: 'Enter the project title:'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter the installation instructions:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter the information on how to use this project:'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Enter the contribution guidelines:'
    },
    {
        type: 'input',
        name: 'testing',
        message: 'Enter the test instructions:',
    },
    {
        type: 'list',
        name: 'licensing',
        message: 'Enter project license:',
        choices: licenses
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Feel free to ask ',
    },
    {
        type: 'input',
        message: 'Enter your github username:',
        name: 'username'
    },
    {
        type: 'input',
        message: 'Enter your email address:',
        name: 'email',
    },
])
 

// Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
    if (err)
        throw err;
    console.log('Success! Information transferred to the README!')
});
};


//  Create a function to initialize app

function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput)
        writeToFile("README.md", generate(userInput));
    });
};

    

// Function call to initialize app
init();