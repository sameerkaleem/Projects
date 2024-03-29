#!/usr/bin/env node

import inquirer from "inquirer";

let my_balance = 10000;

let my_pin = 1234;

let pin = await inquirer.prompt
(
    [
        {
            name:"pin",
            type:"number",
            message:"enter your pin code:"
        }
   ]
)

if (pin.pin === my_pin)
{
    console.log("\ncorrect pin\n")
    
    let operations = await inquirer.prompt
    (
        [
            {
                name:"operation",
                type:"list",
                message:"select an option:",
                choices:["withdraw","check balance","fast cash"]
     
            }
        ]
    )

   if(operations.operation==="withdraw")
   {
        let amount= await inquirer.prompt
        (
            [
                {
                    name:"amount",
                    type:"number",
                    message:"enter amount:"
                }
            ]
        )

        if(amount.amount < my_balance)
            {
                my_balance -= amount.amount;
                console.log(`your remaining balance ${my_balance}`)
            }

        else
        {
            console.log("insufficient balance!")
        }

    }

    if(operations.operation ==="check balance")
    {
        console.log(`your balance is: ${my_balance}`)
    }

    if(operations.operation ==="fast cash")
    {
        let fast_cash = await inquirer.prompt
        (
            [
                {
                    name:"fastcash",
                    type:"list",
                    message:"select an amount:",
                    choices:[3000,5000,7000,11500]
     
                }
            ]
        )
        
        if(fast_cash.fastcash <= my_balance )
        {
            my_balance -= fast_cash.fastcash;
            console.log(`your remaining balance is ${my_balance}`) 
        }
    
        else
        {
            console.log("insufficient balance!")
        }
    } 
}

else{console.log("invalid pin")} 