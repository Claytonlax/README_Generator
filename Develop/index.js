// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

// An array of questions for user input
const questions = [
  {
    message: "Project Title",
    type: "input",
    name: "title",
  },

  {
    message: "Project Description",
    type: "input",
    name: "description",
  },
  {
    message: "License",
    type: "list",
    name: "license",
    choices: [
      "MIT",
      "Apache 2.0",
      "GNU GPL v2.0",
      "GNU GPL v3.0",
      "GNU LGPL v2.1",
      "GNU AGPL v.3.0",
      "BSD 2",
      "BSD 3",
      "Boost 1.0",
      "Eclipse 1.0",
      "Mozilla 2.0",
      "The Unlicense",
    ],
  },

  {
    message: "Installation Instructions",
    type: "input",
    name: "installation",
  },
  {
    message: "Usage Information",
    type: "input",
    name: "usage",
  },

  {
    message: "Contributing",
    type: "input",
    name: "contributing",
  },
  {
    message: "Tests",
    type: "input",
    name: "tests",
  },
  {
    message: "Github Username",
    type: "input",
    name: "username",
  },

  {
    message: "Email Address",
    type: "input",
    name: "email",
  },
];

// The Function that writes the README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("Successfully created README.md")
  );
}

// TODO: The Function that initializes the app
function init() {
  inquirer.prompt(questions).then((answeredQuestions) => {
    console.log(answeredQuestions);
    let readMeString = "";
    readMeString += `# ${answeredQuestions.title}`;
    let licenseVar = answeredQuestions.license;
    if (answeredQuestions.license == "MIT") {
      answeredQuestions.license = "MIT-yellow";
    }
    if (answeredQuestions.license == "Apache 2.0") {
      answeredQuestions.license = "Apache%202.0";
    }
    if (answeredQuestions.license == "GNU GPL v2.0") {
      answeredQuestions.license = "GPL_v2-blue";
    }
    if (answeredQuestions.license == "GNU GPL v3.0") {
      answeredQuestions.license = "GPL_v3-blue";
    }
    if (answeredQuestions.license == "GNU LGPL v2.1") {
      answeredQuestions.license = "LGPL_v3-blue";
    }
    if (answeredQuestions.license == "GNU AGPL v.3.0") {
      answeredQuestions.license = "AGPL_v3-blue";
    }
    if (answeredQuestions.license == "BSD 2") {
      answeredQuestions.license = "BSD_2--Clause-orange";
    }
    if (answeredQuestions.license == "BSD 3") {
      answeredQuestions.license = "BSD_3--Clause-blue";
    }
    if (answeredQuestions.license == "Boost 1.0") {
      answeredQuestions.license = "Boost_1.0-lightblue";
    }
    if (answeredQuestions.license == "Eclipse 1.0") {
      answeredQuestions.license = "EPL_1.0-red";
    }
    if (answeredQuestions.license == "Mozilla 2.0") {
      answeredQuestions.license = "MPL_2.0-brightgreen";
    }
    if (answeredQuestions.license == "The Unlicense") {
      answeredQuestions.license = "Unlicense-blue";
    }

    readMeString += `![License](https://img.shields.io/badge/License-${answeredQuestions.license}.svg)`;

    readMeString += `\n\n`;
    readMeString += `## Description \n\n`;
    readMeString += `${answeredQuestions.description}\n\n `;
    readMeString += `## Installation  \n\n`;
    readMeString += `${answeredQuestions.installation} \n\n`;
    readMeString += `## Usage \n\n`;
    readMeString += `${answeredQuestions.usage} \n\n`;
    readMeString += `## Contributing \n\n`;
    readMeString += `${answeredQuestions.contributing} \n\n`;
    readMeString += `## Tests \n\n`;
    readMeString += `${answeredQuestions.tests} \n\n`;
    readMeString += `## Questions \n\n`;
    readMeString += `https://github.com/${answeredQuestions.username}\n\n`;
    readMeString += `${answeredQuestions.email}  'Please email me here with any further questions.'\n\n`;

    readMeString += `## License \n\n`;
    readMeString += `${licenseVar}\n\n`;

    //console.log(readMeString);

    writeToFile("NewREADMe.md", readMeString);
  });
}
// Calling the initilize function
init();
