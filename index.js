const inquirer = require("inquirer");
const {writeHtmlFile, copyFile, mergeCards} = require("./src/generateHtml");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

teamArray = [];

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
            name: "officeNumber",
            message: "Please enter the team manager's office phone number.",
        },
    ])
    //DECONSTRUCT THEN PUSHING THE NEW MANAGER INTO THE ARRAY
    .then(managerResponses =>{
        const {name, id, email, officeNumber} = managerResponses;
        const manager = new Manager (name, id, email, officeNumber)
        teamArray.push(manager);
    });
};

//EMPLOYEE PROMPT
const employeePrompt = () => {
    return inquirer.prompt([
        //OPTION TO ADD EMPLOYEE ROLE
        {
            type: "list",
            name: "role",
            message: "Would you like to add one of the employees?",
            choices: ["Engineer", "Intern", "(none)"]
        },
        // EMPLOYEE'S NAME
        {
            type: "input",
            name: "name",
            message: "Please enter the employee's name. (Required)",
            when: (answer) => answer.role !== "(none)",
            validate: employeeNameInput => {
                if(employeeNameInput) {
                    return true;
                } else {
                    console.log("Please provide the employee's name.")
                    return false;
                }
            }
        },
        //EMPLOYEE'S ID
        {
            type: "input",
            name: "id",
            message: "Please enter the employee's id. (Required)",
            when: (answer) => answer.role !== "(none)",
            validate: employeeIdInput => {
                if(employeeIdInput) {
                    return true;
                } else {
                    console.log("Please provide the employee's id.")
                    return false;
                }
            }
        },
        //EMPLOYEE'S EMAIL
        {
            type: "input",
            name: "email",
            message: "Please enter the employee's email. (Required)",
            when: (answer) => answer.role !== "(none)",
            validate: employeeEmailInput => {
                if(employeeEmailInput) {
                    return true;
                } else {
                    console.log("Please provide the employee's email.")
                    return false;
                }
            }
        },
        //ENGINEER'S GITHUB
        {
            type: "input",
            name: "github",
            message: "Please enter the engineer's github. (Required)",
            when: (answer) => answer.role === "Engineer",
            validate: engineerGithubInput => {
                if(engineerGithubInput) {
                    return true;
                } else {
                    console.log("Please provide the engineer's github.")
                    return false;
                }
            }
        },
        //INTERN'S SCHOOLS
        {
            type: "input",
            name: "school",
            message: "Please enter the intern's school. (Required)",
            when: (answer) => answer.role === "Intern",
            validate: internSchoolInput => {
                if(internSchoolInput) {
                    return true;
                } else {
                    console.log("Please provide the intern's school.")
                    return false;
                }
            }
        },
        //ADDING ADDITIONAL EMPLOYEE
        {
            type: "confirm",
            name: "confirm",
            message: "Would you like to add another employee?",
            when: (answer) => answer.role !== "(none)",
            default: false
        },
    ])
    .then(employeeResponses =>{
        //DECONSTRUCT
        let {role, name, id, email, github, school, confirm} = employeeResponses;
        let employee;
        
        //NEW ENGINEER OR INTERN BASE ON ROLE SELECTED
        switch(role){
            case "Engineer":
                employee = new Engineer (name, id, email, github);
                break;
        
            case "Intern":
                employee = new Intern (name, id, email, school);
                break;
        };
        //PUSH EMPLOYEE IF TRUE TO ARRAY
        if(employee){
            teamArray.push(employee);                
        }

        //IF SELECTING "(none)" FOR ROLE OR "false/no" FOR CONFIRM, STOP INQURIER
        //IF SELECTING YES TO EITHER RERUN EMPLOYEEPROMPT
        if(!confirm || role === "(none)"){
            return teamArray;
        } else {

            return employeePrompt(teamArray);

        };
    });
};

managerPrompt()
.then(employeePrompt)
//TROUBLESHOOT
// Promise.resolve()
// .then(()=> {
//     return [
//         new Manager ("a", "a", "a", "a"),
//         new Engineer ("b", "b", "b", "b"),
//         new Intern ("c", "c", "c", "c"), 
//     ];
// })
.then(teamArray => {
    return mergeCards(teamArray);
})
.then(writeHtmlFile)
.then(copyFile)
