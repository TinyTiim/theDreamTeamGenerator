const engineer = require("../lib/engineer");
const manager = require("../lib/manager");
const intern = require("../lib/intern");

const generateTeam = (team) => {
//This generates the Intern card in the html
const generateIntern = (intern) => {
    return `
    <div class="card" style="width: 18rem;">
             
    <h2 class="card-title">${intern.getName()}</h2>
    <h3 class="card-title"><i class="fa-duotone fa-graduation-cap"></i>${intern.getPosition()}</h3>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID:${intern.getID()}</li>
      <li class="list-group-item">Email:<a href:"mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
      <li class="list-group-item">School:${intern.getSchool()}</li>
    </div>`;
};
//This generates the Manager card in the html
const generateManager = (manager) => {
    return `
    <div class="card" style="width: 18rem;">
             
    <h2 class="card-title">${manager.getName()}</h2>
    <h3 class="card-title"><i class="fa-solid fa-people-roof"></i>${manager.getPosition()}</h3>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID:${manager.getID()}</li>
      <li class="list-group-item">Email:<a href:"mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
      <li class="list-group-item">School:${manager.getOfficeNum()}</li>
    </div>`;
};
//This generates the Engineering card in the html
const generateEngineer = (engineer) => {
    return `
    <div class="card" style="width: 18rem;">
             
    <h2 class="card-title">${engineer.getName()}</h2>
    <h3 class="card-title"><i class="fa-solid fa-face-glasses"></i>${engineer.getPosition()}</h3>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID:${engineer.getID()}</li>
      <li class="list-group-item">Email:<a href:"mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
      <li class="list-group-item">School:${engineer.getSchool()}</li>
    </div>`;
};


}
//This is the base of the html template, with this I was able to add a header as well as add the generateTeam for where I want the team card to be.
module.exports = (team) => {
    return`
   <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>My Team</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css">
      <script src="https://kit.fontawesome.com/c502137733.js"></script>
    </head>
    <body>
      <div class="container1">
      <div class="row">
        <div class=" col-12 ">
      <h1 class="text-center text-info bg-dark ">My Team</h1>
      </div>
    </div>
      <div class = "container2">
        <div class="row">
          <div class="col-12 d-flex justify content-center ">
            ${generateTeam(team)}
          </div>
        </div>
      </div>
    </body>
    </html>`;
}