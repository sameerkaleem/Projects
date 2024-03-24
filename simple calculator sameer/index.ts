#!/usr/bin/env node
import inquirer from "inquirer";

let cal = await inquirer.prompt([{
    name:"num1",
    type:"number",
    message:"Enter first number: ",
},
{
    name:"operator",
    type:"list",
    message:"Select An Operator: ",
    choices:["addition","subtraction","multiplication","division"]   
},
{name:"num2",
type:"number",
message:"Enter second number: "}
]);

if(cal.operator == "addition"){console.log(cal.num1+cal.num2)}
else if(cal.operator == "subtraction"){console.log(cal.num1-cal.num2)}
else if(cal.operator == "multiplication"){console.log(cal.num1*cal.num2)}
else if(cal.operator == "division"){console.log(cal.num1/cal.num2)}
else {console.log("please select a valid operator")};