// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateReadMe = require('./utils/generateMarkdown')

const generateReadMe =({Title, Description, TableofContents, Installation, Usage, License, Contributing, Test, Questions}) =>
` # ${Title}

# ${Description}

# ${TableofContents}

# ${Installation}

# ${Usage}

# ${License}

# ${Contributing}

# ${Test}

# ${Questions}


`

// TODO: Create an array of questions for user input
const questions = [
{
    name: 'projectTitle',
    message: 'Project Title',
    type: 'input'
},

{
    name: 'description',
    message: 'Project Description',
    type: 'input'
},

{
    name: 'installation',
    message: 'Installation',
    type: 'input'
},

{
    name: 'usage',
    message: 'Usage',
    type: 'input'
},

{
    name: 'contributing',
    message: 'Contributing',
    type: 'input'
},

{
    name: 'tests',
    message: 'tests',
    type: 'input'
},

{
    name: 'questionsSection',
    message: 'Questions',
    type: 'input'
},


];

console.log(questions)

inquirer.prompt(questions).then((answers) => {
  generateReadMe(answers);
});

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

fs.writeFile('README.md', md, (err) => {
    if (err) throw err;
    console.log('README.md file generated!');
  });



// TODO: Create a function to initialize app
// function init() {

// }

// Function call to initialize app
// init();
