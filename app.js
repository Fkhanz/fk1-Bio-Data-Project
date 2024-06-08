#! /usr/bin/env node
import inquirer from "inquirer";
let Bio_data = await inquirer.prompt([
    {
        message: "\n whats your name :",
        type: "string",
        name: "first"
    },
    {
        message: "whats your FatherName / HusbandName :",
        type: "string",
        name: "second",
    },
    {
        message: "whats your Academic Qualification :",
        type: "string",
        name: "third"
    },
    {
        message: "whats your Professional Qualification :",
        type: "string",
        name: "four"
    },
    {
        message: "whats your Age :",
        type: "string",
        name: "five"
    },
    {
        message: "whats your date of birth :",
        type: "string",
        name: "six"
    },
    {
        message: "whats your gender :",
        type: "list",
        name: "seven",
        choices: ['Male', 'Female'],
    },
    {
        message: "whats your marital status :",
        type: "list",
        name: "eight",
        choices: ['Single', 'Married'],
    },
    {
        message: "whats your Religion :",
        type: "string",
        name: "nine"
    },
    {
        message: "whats your Nationality :",
        type: "string",
        name: "ten"
    },
    {
        message: "whats your Parmanent Address :",
        type: "string",
        name: "eleven"
    }, {
        message: "whats your CNIC # :",
        type: "string",
        name: "twelve"
    },
    {
        message: "How much experience :",
        type: "list",
        name: "twenty",
        choices: ['5 years', 'More then 5 years'],
    },
    {
        message: "whats your company name  :",
        type: "string",
        name: "thirteen"
    },
    {
        message: "whats your designation :",
        type: "string",
        name: "fourteen"
    },
    {
        message: "whats your Salary :",
        type: "string",
        name: "fifteen"
    },
    {
        message: "whats your Skills :",
        type: "string",
        name: "sixteen"
    },
    {
        message: "whats your Cell N0 # :",
        type: "string",
        name: "seventeen"
    },
    {
        message: "whats your Email ID :",
        type: "string",
        name: "eighteen"
    },
    {
        message: "whats your website :",
        type: "list",
        name: "nineteen",
        choices: ['Yes', 'No'],
    },
]);
if (Bio_data) {
    console.log("\nYOUR DATA IS SUBMITTED!");
    console.log(" *** THANK YOU ***\n");
}
