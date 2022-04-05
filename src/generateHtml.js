const fs = require("fs/promises");


// !! add option enginner or intern or none

//FUNCTION TO GENERATE HTML
function generateHtml(data){
    const{name, id, email, phone} = data;
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
    ${name};
    ${id};
    ${email};
    ${phone};
</body>
</html>`
};

function writeHtmlFile(responses) {
    const fileContent = generateHtml(responses);
    return fs.writeFile("./dist/index.html", fileContent);
};

module.exports = {writeHtmlFile};