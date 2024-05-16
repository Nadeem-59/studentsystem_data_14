"use strict";
//Student Management System
//This project is a simple console based Student Management System.
//In this project you will be learning how to add new students, 
//how to generate a 5 digit unique studentID for each student?
// Also, you will be implementing the following operations enroll, view balance, pay tuition fees, show status, etc.
// The status will show all the details of the student including name, id, courses enrolled and balance.
// This is one of the best projects to implement the Object Oriented Programming concepts.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Create a GitHub repository for the project and submit its URL in the project submission form.
//#! /usr/bin/env node
const inquirer_1 = __importDefault(require("inquirer"));
const chalk_1 = __importDefault(require("chalk"));
console.log(chalk_1.default.yellow("*****************************"));
console.log(chalk_1.default.red.bold("Welcome to student management"));
console.log(chalk_1.default.yellow("*******************************"));
let docontinue = true;
while (docontinue) {
    let id = Math.floor(10000 + Math.random() * 90000);
    let mybalance = 100000;
    let student = await inquirer_1.default.prompt([{
            name: "name",
            type: "input",
            message: (chalk_1.default.green.bold("Enter student name")),
        },
        { name: "course",
            type: "list",
            message: (chalk_1.default.green.bold("Enter student course")),
            choices: ["Web Development", "Data science", "Artifical intelligence"],
        },
    ]);
    if (student.course === "Web Development") {
        mybalance = 20000;
    }
    else if (student.course === "Data Science") {
        mybalance = 50000;
    }
    else if (student.course === "Artifical intelligence") {
        mybalance = 70000;
    }
    else {
        console.log("invalid course");
    }
    let balance = mybalance;
    console.log(balance);
    let student_id = id;
    console.log(student_id);
    let task = await inquirer_1.default.prompt([
        {
            name: "option",
            type: "list",
            message: "Enter your task",
            choices: ["view status", "Exit"],
        }
    ]);
    if (task.option === "view status") {
        console.log(`student name is ${student.name}`);
        console.log(`your id is ${student_id}`);
        console.log(`your balance is ${balance}`);
    }
    else {
        (task.option === "exit");
        console.log("Thank you for using our services");
    }
    const startagain = await inquirer_1.default.prompt([{
            name: "confirm",
            type: "confirm",
            message: "Do you want to start again",
            default: "false",
        }]);
    if (startagain.confirm) {
        continue;
    }
    else {
        break;
    }
}
;
