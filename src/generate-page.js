module.exports = employeeData => {
    function employeeCards(employeeData) {
        return employeeData.map(employee => {
            switch (employee.getRole()) {
                case 'Manager':
                    return ` 
                    <div class="card shadow" style="width: 18rem">
                        <div class="card-header bg-primary text-light">
                            <h3>${employee.getName()}</h3>
                            <h5><i class="fa-solid fa-mug-hot"></i> ${employee.getRole()}</h5>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${employee.getId()}</li>
                            <li class="list-group-item">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
                            <li class="list-group-item">Office Number: ${employee.getOfficeNumber()}</li>
                        </ul>
                    </div>
                    `
                case 'Engineer':
                    return `
                    <div class="card shadow" style="width: 18rem">
                        <div class="card-header bg-primary text-light">
                            <h3>${employee.getName()}</h3>
                            <h5><i class="fa-solid fa-glasses"></i> ${employee.getRole()}</h5>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${employee.getId()}</li>
                            <li class="list-group-item">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
                            <li class="list-group-item">GitHub: <a href="https://github.com/${employee.getGithub()}">${employee.getGithub()}</a></li>
                        </ul>
                    </div>
                    `
                case 'Intern': 
                    return `
                    <div class="card shadow" style="width: 18rem">
                        <div class="card-header bg-primary text-light">
                            <h3>${employee.getName()}</h3>
                            <h5><i class="fa-solid fa-graduation-cap"></i> ${employee.getRole()}</h5>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${employee.getId()}</li>
                            <li class="list-group-item">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
                            <li class="list-group-item">School: ${employee.getSchool()}</li>
                        </ul>
                    </div>
                    `
            }
        })
    }
    
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team-Portfolio</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <script src="https://kit.fontawesome.com/40fb8c6260.js" crossorigin="anonymous"></script>
    </head>
    <body>
        <header class="container-fluid bg-danger p-4">
            <h1 class="text-center text-light">My Team</h1>
        </header>

        <main class="d-flex justify-content-center">
            <section id="employeeCards" class="m-5 col-10 d-flex justify-content-around">
                ${employeeCards(employeeData)}
            </section>
        </main>
    </body>
    </html>
    `
}