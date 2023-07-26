// TODO: Include packages needed for this application
// ***All packages was included already, such as ".gitignore (node_modules/ and .DS_Store/)", "npm init", "npm install", "npm install inquirer@8.2.4".***
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
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
        name: 'license',
        choices:
            [
                "GNU General Public License v2.0",
                "ISC",
                "MIT",
            ],
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
    ];

// .then((data) => {
//   const fileName = `${data.name.toLowerCase().split(' ')}.json` ;

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile("template_README.md", JSON.stringify(data, null, '\t'), (err) =>
    err ? console.log(err) : console.log('success!')
    );
}
// })

// // TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function (data) {
        var fileName = 'template_README.md';
        writeToFile(fileName, data)
    });
}

// // Function call to initialize app
init();

