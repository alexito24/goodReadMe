// TODO: Include packages needed for this application

const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [ {
            type: "input",
            message: "What is your GitHub user name?",
            name: "username"
        },
        {
            type: "input",
            message: "What is your Project Tittle?",
            name: "projectTittle"
        },
        {
            type: "input",
            message: "Provide detail description",
            name: "projectDescription"
        },
        {
            type: "input",
            message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
            name: "installationProcess"
        },
        {
            type: "input",
            message: "Provide instructions for use",
            name: "instruction"
        },
        {
            type: "input",
            message: "Provide test intructions",
            name: "tesstInstruction"
        },
        {
            type: "input",
            message: "what kind of License should your project have?",
            name: "licenseName"
        },
        {
            type: "input",
            message: "what command shoould be run to install depencies?",
            name: "dependeciesCommand"
        },

];

console.log(questions)
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
