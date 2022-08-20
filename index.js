const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');
const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('');

let managers = [];
let engineers = [];
let interns = [];

let promptQuestions = employeeData => {

    return inquirer.prompt ([
        {
            type: "list",
            name: "employeeType",
            message: "Which role would you like to add?",
            choices: ['Manager', 'Engineer', 'Intern'],
        },
        {
            type: "input",
            name: "name",
            message: "Add employee name:",
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Add employee name:');
                  return false;
                }
            }
        },
        {
            type: "input",
            name: "id",
            message: "Add employee id:",
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Add employee id:');
                  return false;
                }
            }
        },
        {
            type: "input",
            name: "office",
            message: "Add Manager's office number:",
            when: function (data) {
              if (data.employeeType === "Manager") {
                return true;
              } else {
                return false;
              }
            }
        },
        {
            type: "input",
            name: "github",
            message: "Add Engineer's github username:",
            when: function (data) {
              if (data.employeeType === "Engineer") {
                return true;
              } else {
                return false;
              }
            }
        },
        {
            type: "input",
            name: "school",
            message: "Add school of Intern:",
            when: function (data) {
              if (data.employeeType === "Intern") {
                return true;
              } else {
                return false;
              }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAnotherEmployee',
            message: 'Would you like to add another employee?',
            default: false
        },
    ])

    .then(answerData => {
        if (answerData.employeeType === "Manager") {
            let manager = new Manager (answerData.name, answerData.id, answerData.email, answerData.office);
            managers.push(manager);
        }
        if (answerData.employeeType === "Engineer") {
            let engineer = new Engineer (answerData.name, answerData.id, answerData.email, answerData.github);
            engineers.push(engineer);
        }
        if (answerData.employeeType === "Intern") {
            let intern = new Intern (answerData.name, answerData.id, answerData.email, answerData.school);
            interns.push(intern);
        }
        if (answerData.confirmAnotherEmployee) {
          return promptQuestions(employeeData);
        } else {
          return employeeData;
        }
      });

}