const inquirer = require("inquirer");
const {writeHtmlFile} = require("./src/generateHtml");

// const Manager = require("../lib/Manager");
// const Engineer = require("../lib/Engineer");
// const Intern = require("../lib/Intern");

//MANAGER PROMPT INITAL QUESTIONS
const managerPrompt = () => {
    return inquirer.prompt([
        // MANAGER'S NAME
        {
            type: "input",
            name: "name",
            message: "Please enter the team manager's name. (Required)",
            validate: managerNameInput => {
                if(managerNameInput) {
                    return true;
                } else {
                    console.log("Please provide the team manager's name.")
                    return false;
                }
            }
        },
        //MANAGER'S ID
        {
            type: "input",
            name: "id",
            message: "Please enter the team manager's id. (Required)",
            validate: managerIdInput => {
                if(managerIdInput) {
                    return true;
                } else {
                    console.log("Please provide the team manager's id.")
                    return false;
                }
            }
        },
        //MANAGER'S EMAIL
        {
            type: "input",
            name: "email",
            message: "Please enter the team manager's email. (Required)",
            validate: managerEmailInput => {
                if(managerEmailInput) {
                    return true;
                } else {
                    console.log("Please provide the team manager's email.")
                    return false;
                }
            }
        },
        //MANAGER'S OFFICE NUMBER
        {
            type: "input",
            name: "phone",
            message: "Please enter the team manager's office phone number.",
        },

    ])
    .then(responses =>{
        console.log(responses);
        writeHtmlFile(responses);
    });
};

// !! add option enginner or intern

managerPrompt();