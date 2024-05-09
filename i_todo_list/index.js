#!/usr/bin/env node
import inquirer from "inquirer";
let todos = ["Sir zia", "Ameen alam"];
async function CreateTodo(todos) {
    do {
        let ans = await inquirer.prompt({
            type: "list",
            name: "select",
            message: "select an operation",
            choices: ["Add", "update", "view", "delete", "Exit"],
        });
        if (ans.select == "Exit") {
            console.log("Exiting...");
            break;
        }
        if (ans.select == "Add") {
            let addTodo = await inquirer.prompt({
                name: "todo",
                type: "input",
                message: "Add items in the list",
            });
            todos.push(addTodo.todo);
            console.log(todos);
        }
        if (ans.select == "update") {
            let updateTodo = await inquirer.prompt({
                name: "todo",
                type: "list",
                message: "update item in the list",
                choices: todos.map(item => item)
            });
            let addTodo = await inquirer.prompt({
                name: "todo",
                type: "input",
                message: "Add items in the list",
            });
            let newTodo = todos.filter(val => val !== updateTodo.todo);
            todos = [...newTodo, addTodo.todo];
            console.log(todos);
        }
        if (ans.select == "view") {
            console.log("******* TO DO LIST *********");
            console.log(todos);
            console.log("****************************");
        }
        if (ans.select == "delete") {
            let deleteTodo = await inquirer.prompt({
                name: "todo",
                type: "list",
                message: "update item in the list",
                choices: todos.map(item => item)
            });
            let newTodo = todos.filter(val => val !== deleteTodo.todo);
            todos = [...newTodo];
            console.log(todos);
        }
    } while (true);
}
CreateTodo(todos);
