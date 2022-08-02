// TODO: Include packages needed for this application


const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {   type:"input",
    message:"What is your GitHub username?",
    name:"GitHub"
    },
    {
        type:"input",
        message:"What is your email addres?",
        name:"email"
    },
    {
        type:"input",
        message:"What is your project title?",
        name:"title"
    },
    {
        type:"input",
        message:"Please write a short description of your project.",
        name:"description"
    },
    {
        type:"input",
        messages:"What command should be run to install dependencies?",
        name:"dependencies"
    },
    {
        type:"input",
        messages:"What does the user need to know about using the repository?",
        name:"benefits"   
    },
    {
        type:"checkbox",
        message:"What kind of licesne should your project have?",
        choices:["MIT", "GPL 3.0", "BSD 3", "Apache 2.0", "None"],
        name:"license"
    },
    {
        type:"input",
        messages:"What command should be run to run tests?",
        name:"test"
    },
    {
        type:"input",
        messages:"What does the user need to know about contributing to the repository?",
        name:"contribute"
    }
];


function writeToFile(fileName, data) {
     fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(err)
        }
        console.log("Generated README")
     })
}

function init() {
    inquirer.prompt(questions)
        .then((inquirerResponse, data) => {
            console.log("Generating");

            writeToFile("./readme/readME.md", generateMarkdown(inquirerResponse, data));
        })
        .catch((err) => {
            console.log(err);
        })      
}

init();
