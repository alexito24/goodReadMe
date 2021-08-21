// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
const util = require('util');

const generateMarkdown = require('./utils/generateMarkdown')
const api = require('./utils/api');
// TODO: Create an array of questions for user input
 const questions = 
 [
     // Title of Project
    {
        type: 'input',
        name: 'title',
        message: 'Enter the title of your project.',

    },
    // Project Description
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project.',
        
    },
    // Project Installation
    {
        type: 'input',
        name: 'installation',
        message: 'Explain how user would install (if necessary) for Installation Section.',
        // Validation not required if question is optional
    },
    // Usage of project
    {
        type: 'input',
        name: 'usage',
        message: 'Enter your project instructions and examples of it in use for Usage Section.',
    },
    // Select license
    {
        type: 'list',
        name: 'license',
        message: 'Choose your license for your project.',
        // https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/licensing-a-repository
        choices: ['unlicense', 'mit', 'apache-2.0', 'artistic-2.0', 'bsl-1.0', 'bsd-2-clause', 'cc', 'wtfpl', 'epl-1.0', 'agpl-3.0', 'gpl', 'lgpl', 'ms-pl',  'ncsa', ]
        
    },
    // Contributing to project
    {
        type: 'input',
        name: 'contributing',
        message: 'Explain how users can contribute to your project (if necessary).',

    },
    // Test for project
    {
        type: 'input',
        name: 'tests',
        message: 'Provide tests for project, and explain how to test (if necessary).',

    },
    // GitHub Username
    {
        type: 'input',
        name: 'username',
        message: 'Enter your GitHub username.',

    },
    // GitHub Repository
    {
        type: 'input',
        name: 'repository',
        message: 'Enter the name of your repository on GitHub.',
    },
]

// TODO: Create a function to write README file
 function writeToFile(fileName, data){ 
 fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log('Your markdown file has been created.')
    });
 }

    // TODO: Create a function to initialize app
async function init() {
    try {
        // Reference inquirer array with prompts
        const userResponses = await inquirer.prompt(questions);
        console.log("Your responses: ", userResponses);
        console.log("Your responses have been logged. Calling to GitHub...");

        // Referencing API.js
        const userInfo = await api.getUser(userResponses);
        console.log("Your GitHub user info: ", userInfo);

        // Pass inquirer data and api data to markdown
        console.log("Generating your markdown")
        const markdown = generateMarkdown(userResponses, userInfo);
        console.log(markdown);

        // Write markdown
        await writeToFile('ExampleREADME.md', markdown);

    } catch (error) {
        console.log(error);
    }
}

// Function call to initialize app
init();
