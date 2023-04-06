const inquirer = require('inquirer');
const fs = require('fs');
const generateTeam = require("./src/page-template.js");

const engineer = require("./lib/engineer.js")
const intern = require("./lib/intern.js")
const manager = require("./lib/manager.js")

const newStaffMemberData = [];

const questions = async () => {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'list',
      name: 'position',
      message: 'What is your position?',
      choices: ["engineer", "intern", "manager"],
    },
    {
      type: 'input',
      name: 'numID',
      message: 'What ID number?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email?',
    },
  ]);

  if (answers.position === "manager") {
    const managerAns = await inquirer.prompt([
      {
        type: "input",
        name: "officeNum",
        message: "What is your office number?",
      },
    ]);
    const newManager = new manager (
      answers.name,
      answers.numID,
      answers.email,
      managerAns.officeNum
    );
    newStaffMemberData.push(newManager);
  }  else if (answers.position === "engineer") {
    const githubAns = await inquirer.prompt([
      {
        type: "input",
        name: "github",
        message: "What is your github?",
      },
    ]);
    const newEngineer = new engineer (
      answers.name,
      answers.numID,
      answers.email,
      githubAns.github
    );
    newStaffMemberData.push(newEngineer);
  }  else if (answers.position === "intern") {
    const schoolAns = await inquirer.prompt([
      {
        type: "input",
        name: "school",
        message: "What school?",
      },
    ]);
    const newIntern = new intern (
      answers.name,
      answers.numID,
      answers.email,
      schoolAns.school
    );
    newStaffMemberData.push(newIntern);
  }

  async function promptQuestions() {
    const addMemberAns = await inquirer.prompt([
      {
        type: "list",
        name: "addMember",
        choices: ['Add new member', 'Create team'],
        message: "What would you like to do?",
      }
    ]);
    if (addMemberAns.addMember === 'Add new member') {
      return questions();
    }
    return createTeam();
  }


  promptQuestions();

  function createTeam() {
    console.log("new team member", newStaffMemberData)
    fs.writeFileSync(
      "./dist/index.html",
      generateTeam(newStaffMemberData),
    "utf-8"
    );
  }
}


questions();
