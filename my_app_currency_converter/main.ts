#!/usr/bin/env node

import inquirer from "inquirer";

let currency:any =
{
    USD:1,
    GBP:0.79,
    EUR:0.92,
    PKR:277.98,
};

let ans = await inquirer.prompt
(
    [
        {
            name:"from",
            type:"list",
            message:"enter from currency",
            choices:["USD","GBP","EUR","PKR"],
            
        },
        {
            name:"to",
            type:"list",
            message:"enter to currency",
            choices:["USD","GBP","EUR","PKR"],

        },
        {
            name:"amount",
            type:"number",
            message:"enter amount",
            
        },
    ]
)

let from = currency[ans.from]
let to = currency[ans.to]
let amount=ans.amount

let base_Amount=amount/from
let converted_Amount=base_Amount*to

console.log(converted_Amount);
