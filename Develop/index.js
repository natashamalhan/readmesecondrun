// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',

    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project. (Required)',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions for your project. (Required)',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage information for your project. (Required)',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please provide contribution guidelines for your project. (Required)',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please provide test instructions for your project. (Required)',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license for your project. (Required)',
        choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None'],
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please provide your GitHub username. (Required)',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide your email address. (Required)',
    }
];
inquirer.prompt(questions)
.then(data => {

fs.writeFileSync('README.md',`
# ${data.title}
## Description
${data.description}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
* [Test](#test)
* [License](#license)
* [Questions](#questions)
## Installation
${data.installation}
## Usage
${data.usage}
## Contribution
${data.contribution}
## Test
${data.test}
## License
${data.license}
## Questions
If you have any questions, please contact me at ${data.email}. You can also find more of my work at [${data.github}](

`)
})
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
