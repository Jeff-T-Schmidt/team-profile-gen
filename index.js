const inquirer = require('inquirer');
const Employee = require('./lib/employee');
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern")
const managers = [];
const employees = [];
const engineers = [];
const interns = [];


const ask = () => {
    inquirer.prompt ([
        {
            type:"list",
            message: "Who do you want to create?",
            name: "selection",
            choices: ["Add new Manager", "Add new Employee", "Add new Engineer","Add new Intern", "Quit"]
        },
     
    ]) .then(ans=>{
        switch (ans.selection) {
            case "Add new Manager":
                generateManager()
                break;
            case "Add new Employee":
                generateEmployee()
                break;
            case "Add new Engineer":
                generateEngineer()
                break;
            case "Add new Intern":
                generateIntern()
                break;
            
            default:
                console.log("Thanks for playing")
                break;
        }
    })
}

const generateManager = () =>{
    inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message:"What is your name?",
        },
        {
            type: "input",
            name: "managerId",
            message:"What is your Id?",
        },
        {
            type: "input",
            name: "managerEmail",
            message:"What is your Email?",
        },
        {
            type: "input",
            name: "managerOfficenumber",
            message:"What is your office number?",
        },
    ]).then(ans=>{
        const newManager = new Manager(ans.managerName,ans.managerId, ans.managerEmail, ans.managerOfficenumber)
        managers.push(newManager)
        console.log(managers)
        // newManager.generateManager(ans.managerName, ans.managerEmail, ans.managerId, ans.managerOfficenumber)
        // console.log(newManager)
        ask()
    })
}
const generateEmployee = () =>{
    inquirer.prompt ([
        {
            type: "input",
            name: "employeeName",
            message:"What is your name?",
        },
        {
            type: "input",
            name: "employeeId",
            message:"What is your Id?",
        },
        {
            type: "input",
            name: "employeeEmail",
            message:"What is your Email?",
        },
       

    ]).then(ans=>{
        const newEmployee = new Employee(ans.employeeName, ans.employeeId, ans.employeeEmail,)
        employees.push(newEmployee)
        console.log(employees)
    })
}
const generateEngineer = () =>{
    inquirer.prompt ([
        {
            type: "input",
            name: "engineerName",
            message:"What is your name?",
        },
        {
            type: "input",
            name: "engineerId",
            message:"What is your Id?",
        },
        {
            type: "input",
            name: "engineerEmail",
            message:"What is your Email?",
        },
        {
            type: "input",
            name: "engineerGithub",
            message:"What is your Github?",
        },
       

    ]).then(ans=>{
        const newEngineer = new Engineer (ans.engineerName, ans.engineerId, ans.engineerEmail, ans.engineerGithub)
        engineers.push(newEngineer)
        console.log(engineers)
    })
}
const generateIntern = () =>{
    inquirer.prompt ([
        {
            type: "input",
            name: "internName",
            message:"What is your name?",
        },
        {
            type: "input",
            name: "internId",
            message:"What is your Id?",
        },
        {
            type: "input",
            name: "internEmail",
            message:"What is your Email?",
        },
        {
            type: "input",
            name: "internSchool",
            message:"What school are you attending?",
        },
       

    ]).then(ans=>{
        const newIntern = new Intern (ans.internName, ans.internId, ans.internEmail, ans.internSchool)
        interns.push(newIntern)
        console.log(interns)
    })
}


ask();