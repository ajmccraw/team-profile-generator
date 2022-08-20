function generateHTML (managers, engineers, interns) {
    managerArr = managers;
    engineerArr = engineers;
    internsArr = interns;

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
        <link rel="stylesheet" href="./style.css">
        <title>My Team</title>
    </head>
    <body>
        <header class="header container-fluid">
            <h1>My Team</h1>
        </header>
        <section class="management container-fluid">
            <h2>Management</h2>
        </section>
        <div class="row">
        ${generateManagerCards(managerArr)}
        </div>
        <section class="engineers container-fluid">
            <h2>Engineers</h2>
        </section>
        <div class="row">
        ${generateEngineerCards(engineerArr)}
        </div>
        <section class="interns container-fluid">
            <h2>Interns</h2>
        </section>
        <div class="row">
        ${generateInternCards(internsArr)}
        </div>
    
    </body>
    </html>`
}
