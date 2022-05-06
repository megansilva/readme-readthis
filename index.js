// TODO: Include packages needed for this application

const inquire = require("inquirer");
const fs=require("fs");
const path=require("path");

// TODO: Create an array of questions for user input
const questions = [
    {   type:"input",
        message:"What is your GitHub username?",
        name:"GitHib Username:"
    },
    {
        type:"input",
        message:"What is your email addres?",
        name:"Email address:"
    },
    {
        type:"input",
        message:"What is your project name?",
        name:"Project name:"
    },
    {
        type:"input",
        message:"Please write a short description of your project.",
        name:"Description:"
    },
    {
        type:"checkbox",
        message:"What king of licesne should your project have?",
        choices:["MIT", "GPL 3.0", "BSD 3", "Apache 2.0", "None"],
        name:"licenseHave"
    },
    {
        type:"input",
        messages:"What command should be run to install dependencies?",
        name:"commmanDepend"
    },
    {
        type:"input",
        messages:"What command should be run to run tests?",
        name:"commandRun"
    },
    {
        type:"input",
        messages:"What does the user nedd to know about using the repository?",
        name:"usingRepo"   
    },
    {
        type:"input",
        messages:"What does the user nedd to know about contributing to the repository?",
        name:"contributeRepo"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquire.prompt(questions)
}


// Function call to initialize app
init();
