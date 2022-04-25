const inquirer = require('inquirer');
const Employee = require('./lib/employee');
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const fs = require("fs");
const generateTeam = require("./util/generateHtml"); 

const team = [];

generateTeam1 = () => {
    const ask = () => {
        inquirer.prompt([
            {
                type: "list",
                message: "Who do you want to create?",
                name: "selection",
                choices: ["Add new Manager","Add new Engineer", "Add new Intern", "Finish"]
            },

        ]).then(ans => {
            switch (ans.selection) {
                case "Add new Manager":
                    generateManager1()
                    break;
                case "Add new Engineer":
                    generateEngineer1()
                    break;
                case "Add new Intern":
                    generateIntern1()
                    break;

                default:
                    console.log("Bye!")
                    fs.writeFileSync("./dist/index.html", generateTeam(team))
                    break;
            }
        })
    }
    const generateManager1 = () => {
        inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "What is your name?",
            },
            {
                type: "input",
                name: "managerId",
                message: "What is your Id?",
            },
            {
                type: "input",
                name: "managerEmail",
                message: "What is your Email?",
            },
            {
                type: "input",
                name: "managerOfficenumber",
                message: "What is your office number?",
            },
        ]).then(ans => {
            const newManager = new Manager(ans.managerName, ans.managerId, ans.managerEmail, ans.managerOfficenumber)
            team.push(newManager)
            console.log(team)
            // newManager.generateManager(ans.managerName, ans.managerEmail, ans.managerId, ans.managerOfficenumber)
            // console.log(newManager)
            ask()

        })
    }
    const generateEngineer1 = () => {
        inquirer.prompt([
            {
                type: "input",
                name: "engineerName",
                message: "What is your name?",
            },
            {
                type: "input",
                name: "engineerId",
                message: "What is your Id?",
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "What is your Email?",
            },
            {
                type: "input",
                name: "engineerGithub",
                message: "What is your Github?",
            },


        ]).then(ans => {
            const newEngineer = new Engineer(ans.engineerName, ans.engineerId, ans.engineerEmail, ans.engineerGithub)
            team.push(newEngineer)
            console.log(team)
            ask()
        })
    }
    const generateIntern1 = () => {
        inquirer.prompt([
            {
                type: "input",
                name: "internName",
                message: "What is your name?",
            },
            {
                type: "input",
                name: "internId",
                message: "What is your Id?",
            },
            {
                type: "input",
                name: "internEmail",
                message: "What is your Email?",
            },
            {
                type: "input",
                name: "internSchool",
                message: "What school are you attending?",
            },


        ]).then(ans => {
            const newIntern = new Intern(ans.internName, ans.internId, ans.internEmail, ans.internSchool)
            team.push(newIntern)
            console.log(team)
            ask()
        })
    }

    ask();
};

generateTeam1();
