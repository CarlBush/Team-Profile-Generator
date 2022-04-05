const fs = require("fs/promises");

//FUNCTION TO GENERATE MANAGER CARD
const generateManager = function (manager) {
    return`
    <div class="col-sm-12 col-md-4">
        <div class="employee-header">
            <h4 class="row justify-content-center ">Carl Bush</h4>
            <h5 class="row justify-content-center mb-0">Manager</h5>
        </div>
        <div class="employee-body">
            <p class="mb-1"><strong>ID:</strong>${manager.id}</p>
            <p class="mb-1"><strong>Email:</strong><a href="mailto:${manager.email}">${manager.email}/a></p>
            <p class="mb-1"><strong>Office Number:</strong>${manager.phone}</p>
        </div>
    </div>`
};

//FUNCTION TO GENERATE ENGINEER CARD
const generateEngineer = function (engineer) {
    return`
    <div class="col-sm-12 col-md-4">
        <div class="employee-header">
            <h4 class="row justify-content-center ">Carl Bush</h4>
            <h5 class="row justify-content-center mb-0">Manager</h5>
        </div>
        <div class="employee-body">
            <p class="mb-1"><strong>ID:</strong>${engineer.id}</p>
            <p class="mb-1"><strong>Email:</strong><a href="mailto:${engineer.email}">${engineer.email}/a></p>
            <p class="mb-1"><strong>Github:</strong><a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
        </div>
    </div>`
};

//FUNCTION TO GENERATE INTERN CARD
const generateIntern = function (intern) {
    return`
    <div class="col-sm-12 col-md-4">
        <div class="employee-header">
            <h4 class="row justify-content-center ">Carl Bush</h4>
            <h5 class="row justify-content-center mb-0">Manager</h5>
        </div>
        <div class="employee-body">
            <p class="mb-1"><strong>ID:</strong>${intern.id}</p>
            <p class="mb-1"><strong>Email:</strong><a href="mailto:${intern.email}">${intern.email}/a></p>
            <p class="mb-1"><strong>School:</strong>${intern.school}</p>
        </div>
    </div>`
};


//FUNCTION TO GENERATE HTML
function generateHtml(manager){
    //const{name, id, email, phone} = data;
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <title>Team Profile</title>
    </head>
    <body>
        <header>
            <h1 class ="row justify-content-center m-4">My Team</h1>
        </header>
    
        <main class="container"> 
            <div class ="row justify-content-center mt-4">
            <!--INSERT CARDS HERE--!>
    
            </div>
        </main>
    
    </body>
    </html>`
};

function writeHtmlFile(responses) {
    const fileContent = generateHtml(responses);
    return fs.writeFile("./dist/index.html", fileContent);
};

module.exports = {writeHtmlFile};