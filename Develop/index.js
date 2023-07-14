// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs')
const path = require('path')

// TODO: Create an array of questions for user input
const questions = [
  {
    message: "Project Title",
    type: "input",
    name: "title",
  },

  {
    message:"A quick description of your project",
    type: "input",
    name: "description",
  },

  {
    message:"License",
    type: "list",
    name: "license",
    choices: ['MIT', 'Apache 2.0']
  },

  //, "Table of Contents", "Installation", "Usage", ""
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

fs.writeFile (fileName, data, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md'));
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answeredQuestions) => {
        console.log(answeredQuestions)
        let readMeString = ""
        readMeString +=`# ${answeredQuestions.title}`
        let licenseVar = answeredQuestions.license
        if (answeredQuestions.license == 'Apache 2.0'){
            answeredQuestions.license = 'Apache%202.0'
        }
        readMeString +=`![License](https://img.shields.io/badge/License-${answeredQuestions.license}-blue.svg)`

        readMeString +=`\n\n`
        readMeString +=`## Description \n\n` 
        readMeString +=`${answeredQuestions.description }\n `
        readMeString +=`## License \n\n`
        readMeString +=`${licenseVar}`
        

        console.log(readMeString)

        writeToFile('readMe2.md', readMeString)

        

    
    })
}

// Function call to initialize app
init();
