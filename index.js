// TODO: Include packages needed for this application
// ***All packages was included already, such as ".gitignore (node_modules/ and .DS_Store/)", "npm init", "npm install", "npm install inquirer@8.2.4".***
const inquirer = require("inquirer");
const fs = require('fs');
// TODO: Create an array of questions for user input
//const questions = [];
inquirer
.createPromptModule([
    {type: 'input',
     name: 'author',
     message: 'Write your name:',
    },
    {type: 'input',
     name: 'name',
     message: 'What is the name of your Project?',
    },
    {type: 'input',
     name: 'description',
     message: 'Describe what does your Project do:',
    },
    {type: 'input',
     name: 'installation',
     message: 'Describe how to install your Project:',
    },
    {type: 'input',
     name: 'usage',
     message: 'Describe how your Project works',
    },
    {type: 'input',
     name: 'contributing',
     message: 'What is the contribuition for your Project?',
    },
    {type: 'input',
     name: 'test',
     message: 'What are the tests instructions of your Project?',
    },
    {type: 'list',
     choices:   [
                'Academic Free License v3.0',
                'Boost Software License 1.0',
                'Creative Commons Attribution 4.0',
                'Eclipse Public License 1.0',
                'GNU General Public License v2.0',
                'ISC',
                'MIT',
                ]
     message: 'Choose the right license for your Project?',
    },
    {type: 'input',
     name: 'github',
     message: 'ENTER your GitHub Username:',
    },
    {type: 'input',
     name: 'email',
     message: 'ENTER your email:',
    },
])
.then((data) => {
  const fileName = `${data.name.toLowerCase().split(' ')}.json` ;
})
// TODO: Create a function to write README file

function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

