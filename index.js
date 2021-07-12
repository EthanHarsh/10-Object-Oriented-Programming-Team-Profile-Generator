const fs = require('fs');
const inq = require('inquirer');
const Manager = require('./lib/managerClass');
const Engineer = require('./lib/engineerClass');
const Intern = require('./lib/internClass');
const managerQuestions = require('./lib/managerQuestions');
const engineerQuestions = require('./lib/engineerQuestions');
const internQuestions = require('./lib/internQuestions');
const pageModel = require('./src/pageModel')
const AdmZip = require('adm-zip');

var manager;
var interns = [];
var engineers = [];

const loopQuestion = [
    {
        type: 'list',
        message: `Would you like to add another team member?`,
        name: 'choice',
        suffix: ' - ',
        choices: ['Engineer', 'Intern', 'Finish & Build File']
    }
]

init();

function init() {
    console.log('Hello, welcome to team maker 9000!');
    console.log(`First, let's start with the team manager.`);
    inq
        .prompt(managerQuestions)
        .then((answers) => {
            manager = new Manager(answers.name, answers.employee_id, answers.email, answers.officeNumber);
            mainLoop();
        })
}

function mainLoop() {
    console.log(manager.getRole());
    inq
        .prompt(loopQuestion)
        .then((answers) => {
            checkAnswer(answers.choice)
        })
}

function engineerLoop() {
    inq
        .prompt(engineerQuestions)
        .then((answers) => {
            let newEng = new Engineer(answers.name, answers.employee_id, answers.email, answers.gitHub);
            engineers.push(newEng);
            mainLoop();
        })
}


function internLoop() {
    inq
        .prompt(internQuestions)
        .then((answers) => {
            let newInt = new Intern(answers.name, answers.employee_id, answers.email, answers.school);
            interns.push(newInt);
            mainLoop();
        })
}


function checkAnswer(answer) {
    if(answer === 'Engineer') {
        engineerLoop();
    } else if (answer === 'Intern') {
        internLoop();
    } else {
        console.log(`Great, I've got that all written down.`);
        console.log(`Now I'm going to construct your file`);
        createTeamFile();
    }
}

function createTeamFile() {
    let code = pageModel.start;
    let managerCode = buildManager();
    code = code + managerCode;
    let i = 0;
    engineers.forEach(el => {
        let engCode = buildEngineer(el, i);
        code = code + engCode;
        i++;
    })
    i = 0;
    interns.forEach(el => {
        let intCode = buildIntern(el, i)
        code = code + intCode;
        i++;
    })

    code = code + pageModel.end;

    fs.writeFileSync('./src/index.html', code, err => {
        if (err) {
            console.log('Something went wrong writing the file 🥲')
            console.log(`This is what the computer said...`)
            console.error(err);
            return
        }
    })

    zipFiles();
}


function buildManager() {
    let managerCard = pageModel.cardStart;

    let lineName = `<span class="card-title font-s-25" id="manager-name">${manager.getName()}</span>`;
    let lineRole = `<span class="card-title font-s-1" id="manager-title">${manager.getRole()}</span>`;
    let lineID = `<ul class="border-light p-1">
    <li class="m-1-top" id="manager-id_num">ID: ${manager.getId()}</li>`
    let lineEmail = `<li class="m-1-top" id="manager-email"><a href="mailto: ${manager.getEmail()}">Email: ${manager.getEmail()}</a></li>`
    let lineOffice = `<li class="m-1-vert" id="manager-office">Office Number: ${manager.officeNumber}</li></ul>`

    managerCard = managerCard + lineName + lineRole + lineID + lineEmail + lineOffice + pageModel.cardEnd;

    return managerCard
}

function buildEngineer(el, i) {
    let lineName = `<span class="card-title font-s-25" id="engineer${i}-name">${el.getName()}</span>`;
    let lineRole = `<span class="card-title font-s-1" id="engineer${i}-title">${el.getRole()}</span>`;
    let lineID = `<ul class="border-light p-1">
    <li class="m-1-top" id="engineer${i}-id_num">ID: ${el.getID()}</li>`
    let lineEmail = `<li class="m-1-top" id="engineer${i}-email"><a href="mailto: ${el.getEmail()}">Email: ${el.getEmail()}</a></li>`
    let lineGithub = `<li class="m-1-vert" id="engineer${i}-github">GitHub: <a href=${el.gitHub} target="_blank">${el.gitHub}</a></li></ul>`

    let card = pageModel.cardStart + lineName + lineRole + lineID + lineEmail + lineOffice + pageModel.cardEnd;

    return card
}

function buildIntern(el, i) {
    let lineName = `<span class="card-title font-s-25" id="intern${i}-name">${el.getName()}</span>`;
    let lineRole = `<span class="card-title font-s-1" id="intern${i}-title">${el.getRole()}</span>`;
    let lineID = `<ul class="border-light p-1">
    <li class="m-1-top" id="intern${i}-id_num">ID: ${el.getID()}</li>`
    let lineEmail = `<li class="m-1-top" id=intern${i}-email"><a href="mailto: ${el.getEmail()}">Email: ${el.getEmail()}</a></li>`
    let lineGithub = `<li class="m-1-vert" id="intern${i}-school">School: ${el.school}</li></ul>`

    let card = pageModel.cardStart + lineName + lineRole + lineID + lineEmail + lineOffice + pageModel.cardEnd;

    return card
}

function zipFiles() {
    const file = new AdmZip();

    file.addFile('./src/index.html');
    file.addFile('./src/vitamins.css');

    fs.writeFileSync('./dist/team.zip', file.toBuffer());
}