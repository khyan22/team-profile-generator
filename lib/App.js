const fs = require('fs')
const inquirer = require('inquirer')
const generateHTML = require('../src/generate-page')
const Manager = require('./Manager')
const Engineer = require('./Engineer')
const Intern = require('./Intern')

class App {
    constructor() {
        this.employees = []
        this.employeePrompt = [
            {
                type: 'list',
                name: 'role',
                message: 'What role of your Employee?',
                choices: ['Manager', 'Engineer', 'Intern'],
                
            },
            {
                type: 'input',
                name: 'name',
                message: 'What is the name of your Employee?',
                validate: name => {
                    if (name) {
                        return true
                    } else {
                        console.log('Please input a name!')
                        return false 
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the id of your Employee?',
                validate: id => {
                    if (id) {
                        return true
                    } else {
                        console.log('Please input an id!')
                        return false
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the email of your Employee?',
                validate: email => {
                    if (email) {
                        return true
                    } else {
                        console.log('Please input an email!')
                        return false
                    }
                }
            },
            {
                type:'input',
                name: 'officeNumber',
                message: 'What is your managers office number?',
                when: (employee) => employee.role === 'Manager',
                validate: officeNumber => {
                    if (officeNumber) {
                        return true 
                    } else {
                        console.log('Please input the office number!')
                    }
                }
            },
            {
                type: 'input',
                name: 'github',
                message: 'What is the Github username of your engineer?',
                when: (employee) => employee.role === 'Engineer',
                validate: github => {
                    if (github) {
                        return true
                    } else {
                        console.log('Please input a Github username')
                        return false
                    }
                }
            },
            {
                type: 'input',
                name: 'school',
                message: 'What school does your inturn go to?',
                when: (employee) => employee.role === 'Intern',
                validate: school => {
                    if (school) {
                        return true
                    } else {
                        console.log('Please input the school they attends!')
                    }
                }
            },
            {
                type: 'confirm',
                name: 'addEmployee',
                message: 'Would you like to add another employee',
                default: false
            }
        ]
    }

    run() {
        inquirer.prompt(this.employeePrompt).then(data => {
            switch (data.role) {
                case 'Manager':
                    this.employees.push(new Manager(data.name, data.id, data.email, data.officeNumber))
                    break
                case 'Engineer':
                    this.employees.push(new Engineer(data.name, data.id, data.email, data.github))
                    break
                case 'Intern':
                    this.employees.push(new Intern(data.name, data.id, data.email, data.school))
                    break
            }

            if(data.addEmployee) {
                this.run()
            } else {
                fs.writeFile('./dist/index.html', generateHTML(this.employees), err => {
                    if (err) {
                        throw err
                    } else {
                        console.log("Your team's page is now complete, check it out in the dist folder")
                    }
                })
            }
        })
    }
}

module.exports = App