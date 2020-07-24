var fs = require ('fs');
const axios = require("axios");
const inquirer = require ('inquirer');
const questions = [
    {
        name: "username", 
        message: "What is your username?"
    }, 
    {
        name: "title", 
        message: "What is the title of your Project?"
    }, 
    {
        name: "description",
        message: "Leave a description of your app"
    },
    {
        name: "install",
        message: "How to install your app"
    },
    {
        name: "table",
        message: "How to install your app"
    },
    {
        name: "usage",
        message: "What is the usage of this app?"
    },
    {
        name: "license",
        message: "Is there a license?"
    },
    {
        name: "contribution",
        message: "Who all contributed?"
    },
    {
        name: "tests",
        message: "Have you performed any tests?"
    },
    {
        name: "questions",
        message: "Do you have any questions?"
    },
];

function writeToFile(fileName, data) {
    fs.appendFile(fileName, data + "\n", function(err){
        if (err) throw err;
    })
}

function getProfile (username){
    axios.get(`https://api.github.com/users/${username}`)
    .then(response => {
    
    writeToFile("README.md", response.data.avatar_url);
    writeToFile("README.md", response.data.html_url);
    writeToFile("README.md", response.data.login)

});
}


inquirer 
    .prompt(
        questions
    )
    .then(data => {
        writeToFile("README.md", data.username);
        writeToFile("README.md", data.title); 
        writeToFile("README.md", data.description); 
        writeToFile("README.md", data.table); 
        writeToFile("README.md", data.install);
        writeToFile("README.md", data.usage);
        writeToFile("README.md", data.license);
        writeToFile("README.md", data.contribution);
        writeToFile("README.md", data.tests);
        writeToFile("README.md", data.questions);
        getProfile (data.username);
    })
