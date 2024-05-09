#!/usr/bin/env node
import inquirer from "inquirer";
let spell = await inquirer.prompt([{
        name: "words",
        type: "input",
        message: "Enter words to count"
    }]);
let words = spell.words.trim().split(" ");
console.log(words.length);
