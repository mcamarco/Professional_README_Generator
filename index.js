// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'title',
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
        message: 'Installation Instructions',
        type: 'input'
    },

    {
        name: 'usage',
        message: 'Usage Information',
        type: 'input'
    },

    {
        name: 'license',
        message: 'License',
        type: 'list',
        choices: ['Apache','MIT','Boost','Mozilla','N/A']
    },

    {
        name: 'contributing',
        message: 'Contribution Guidelines',
        type: 'input'
    },

    {
        name: 'test',
        message: 'Test Instructions',
        type: 'input'
    },

    {
        name: 'questions',
        message: 'Questions',
        type: 'input'
    },

    {
        name: 'github',
        message: 'GitHub Username',
        type: 'input'
    },

    {
        name: 'email',
        message: 'Email',
        type: 'input'
    }
];

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            const md = generateMarkdown(answers);
            fs.writeFile('./README-outputs/README.md', md, (err) => {
                if (err) throw err;
                console.log('README.md file generated!');
            });
        })

};


// Function call to initialize app
init();