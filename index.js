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
        

}