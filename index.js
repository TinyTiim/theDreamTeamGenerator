const inquirer = require('inquirer');
const fs = require('fs');

const engineer = require("./engineer.js")
const intern = require("./intern.js")
const manager = require("./manager.js")

const 


const generateHTML = ({name, position, numID, email, gitLoc}) =>
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
  <title>Document</title>
</head>
<body>
<h1 class="center-align mt-5 mt-4 header bg-light">My Team</h1>
    <div class="container">

    <div class="row 1">
    <div class="col s12 m5">
      <div class="card-panel teal">
        <span class="white-text">
        <div class= "p-5 mb-4 header bg-purple">
        <h2> ${name}</h2>
        <h4> ${position}</h4>
        <h2> ${numID}</h2>
        <h4> ${email}</h4>
        <h2> ${gitLoc}</h2>
        
        
        

        </span>
      </div>
    </div>
    <div class="row 2">
    <div class="col s12 m5">
      <div class="card-panel teal">
        <span class="white-text">
        <div class= p-5 mb-4 header bg-purple>
        <h2> ${name}</h2>
        <h4> ${position}</h4>
        <h2> ${numID}</h2>
        <h4> ${email}</h4>
        <h2> ${gitLoc}</h2>
        
        
        

        </span>
      </div>
    </div>
 
    
    <div class="row 3">
    <div class="col s12 m5">
      <div class="card-panel teal">
        <span class="white-text">
        <div class= p-5 mb-4 header bg-purple>
        <h2> ${name}</h2>
        <h4> ${position}</h4>
        <h2> ${numID}</h2>
        <h4> ${email}</h4>
        <h2> ${gitLoc}</h2>
        
        
        

        </span>
      </div>
    </div>

    <div class="row 4">
    <div class="col s12 m5">
      <div class="card-panel teal">
        <span class="white-text">
        <div class= p-5 mb-4 header bg-purple>
        <h2> ${name}</h2>
        <h4> ${position}</h4>
        <h2> ${numID}</h2>
        <h4> ${email}</h4>
        <h2> ${gitLoc}</h2>
        
        
        

        </span>
      </div>
    </div>
</div>
<div class="row 5">
<div class="col s12 m5">
  <div class="card-panel teal">
    <span class="white-text">
    <div class= p-5 mb-4 header bg-purple>
    <h2> ${name}</h2>
    <h4> ${position}</h4>
    <h2> ${numID}</h2>
    <h4> ${email}</h4>
    <h2> ${gitLoc}</h2>
    
    
    

    </span>
  </div>
</div>


    </div>
  </header>
</body>
</html>`

const questions = async () => {
  const answers = await inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'list',
      name: 'position',
      message: 'What is your position?',
      choices: ["Engineer", "Intern","Manager"],
    },
    {
      type: 'input',
      name: 'numID',
      message: 'What ID number?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your favorite food?',
    },
    {
      type: 'input',
      name: 'gitLoc',
      message: 'Provide either your Github or location of office or school.',
    },
   
  ])


  if (answers.role)



  .then((answers) => {
    const htmlPageContent = generateHTML(answers);

    fs.writeFile('index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });
}