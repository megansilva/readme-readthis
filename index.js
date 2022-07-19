// TODO: Include packages needed for this application


const inquire = require("inquirer");
const fs=require("fs");
const generateMarkdown = require('./utils/generateMarkdown');

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
        message:"What is your project title?",
        name:"Project name:"
    },
    {
        type:"input",
        message:"Please write a short description of your project.",
        name:"Description:"
    },
    {
        type:"input",
        messages:"What command should be run to install dependencies?",
        name:"commmandDepend"
    },
    {
        type:"input",
        messages:"What does the user need to know about using the repository?",
        name:"usingRepo"   
    },
    {
        type:"checkbox",
        message:"What kind of licesne should your project have?",
        choices:["MIT", "GPL 3.0", "BSD 3", "Apache 2.0", "None"],
        name:"licenseHave"
    },
    {
        type:"input",
        messages:"What command should be run to run tests?",
        name:"commandRun"
    },
    {
        type:"input",
        messages:"What does the user need to know about contributing to the repository?",
        name:"contributeRepo"
    }
];


// TODO: Create a function to initialize app

function init() {
    inquire.prompt(questions).then((data) => {
        console.log(data)

    fs.writeFile('readMe/generatedReadme.md', generateMarkdown(data), (err) =>
        err ? console.error(err) : console.log("Completed"))
    });
}

init();
