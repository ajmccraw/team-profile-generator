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

function generateManagerCards (managersArr) {
    if (!managerArr) { 
        return '';
    }
    const managerCardsArr = managersArr.map(managerData => {
        return `
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" style="width: 5rem" src="./images/manager.png" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">${managerData.name}</h5>
              <p class="card-text">ID: ${managerData.id}</p>
              <p class="card-text">Email: ${managerData.email}</p>
              <p class="card-text">Office No: ${managerData.officeNumber}</p>
            </div>
        </div>`
    });
    return `
    ${managerCardsArr.join(`
    `)}
    `
};

function generateEngineerCards (engineerArr) {
    if (!engineerArr) { 
        return '';
    }
    const engineerCardsArr = engineerArr.map(engineerData => {
        return `
    <div class="card bounce" style="width: 18rem;">
        <img class="card-img-top" style="width: 5rem" src="./images/engineer.png" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">${engineerData.name}</h5>
            <p class="card-text">ID: ${engineerData.id}</p>
            <p class="card-text">Email: ${engineerData.email}</p>
            <a href="https://github.com/${engineerData.github}" class="btn btn-primary">GitHub</a>
        </div>
    </div>`
    });
    return `
    ${engineerCardsArr.join(`
    `)}
    `
};