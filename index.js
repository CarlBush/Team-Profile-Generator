const inquirer = require("inquirer");

// const Manager = require("../lib/Manager");
// const Engineer = require("../lib/Engineer");
// const Intern = require("../lib/Intern");

const managerPrompt = () => {
    return inquirer.prompt([
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
        {
            type: "input",
            name: "phone",
            message: "Please enter the team manager's office phone number.",
        },

    ])
    .then(responses =>{
        console.log(responses);
    });
};

managerPrompt();