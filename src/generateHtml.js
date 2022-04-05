const fs = require("fs/promises");

//create manager card
//create engineer card
//create intern card


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
    <title>Document</title>
</head>
<body>
    ${manager.name};
    ${manager.id};
    ${manager.email};
    ${manager.phone};
</body>
</html>`
};

function writeHtmlFile(responses) {
    const fileContent = generateHtml(responses);
    return fs.writeFile("./dist/index.html", fileContent);
};

module.exports = {writeHtmlFile};

//HTML DRAFT FROM TEMPHTML FILE

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
//     <link rel="stylesheet" href="style.css">
//     <title>Team Profile</title>
// </head>
// <body>
//     <header>
//         <h1 class ="row justify-content-center m-4">My Team</h1>
//     </header>

//     <main class="container"> 
//         <div class ="row justify-content-center mt-4">
//             <!--MANAGER-->
//             <div class="col-sm-12 col-md-4">
//                 <div class="employee-header">
//                     <h4 class="row justify-content-center ">Carl Bush</h4>
//                     <h5 class="row justify-content-center mb-0">Manager</h5>
//                 </div>
//                 <div class="employee-body">
//                     <p class="mb-1"><strong>ID:</strong> 1</p>
//                     <p class="mb-1"><strong>Email:</strong>  <a href="mailto:Carl.Bush@meow.com">Carl.Bush@meow.com</a></p>
//                     <p class="mb-1"><strong>Office Number:</strong> XXX-XXX-XXXX</p>
//                 </div>
//             </div>
//             <!--ENGINEER-->
//             <div class="col-sm-12 col-md-4">
//                 <div class="employee-header">
//                     <h4 class="row justify-content-center ">Carl Bush</h4>
//                     <h5 class="row justify-content-center mb-0">Engineer</h5>
//                 </div>
//                 <div class="employee-body">
//                     <p class="mb-1"><strong>ID:</strong> 1</p>
//                     <p class="mb-1"><strong>Email:</strong>  <a href="mailto:Carl.Bush@meow.com">Carl.Bush@meow.com</a></p>
//                     <p class="mb-1"><strong>Github:</strong>  <a href="https://github.com/CarlBush">CarlBush</a></p>
//                 </div>
//             </div>
//             <!--INTERN-->
//             <div class="col-sm-12 col-md-4">
//                 <div class="employee-header">
//                     <h4 class="row justify-content-center ">Carl Bush</h4>
//                     <h5 class="row justify-content-center mb-0">Intern</h5>
//                 </div>
//                 <div class="employee-body">
//                     <p class="mb-1"><strong>ID:</strong> 1</p>
//                     <p class="mb-1"><strong>Email:</strong>  <a href="mailto:Carl.Bush@meow.com">Carl.Bush@meow.com</a></p>
//                     <p class="mb-1"><strong>School:</strong> Meowdy</p>
//                 </div>
//             </div>

//         </div>
//     </main>

// </body>
// </html>