#! /Usr/bin/env
import inquirer from "inquirer";
import chalk from "chalk";
// inquirer  done
//  array    done
// function  done
// operators
let todos = ["Ayesha", "Shumaila", "Muntaha", "Yumna"];
async function createTodo(todos) {
    do {
        let ans = await inquirer.prompt({
            type: "list",
            message: "select an operation",
            name: "select",
            choices: ["Add", "update", "view", "delete"],
        });
        if (ans.select === "Add") {
            let addTodo = await inquirer.prompt({
                type: "input",
                message: "Add items in thhe list",
                name: "todo",
            });
            todos.push(addTodo.todo);
            todos.forEach(todos => console.log(todos));
            //  console.log(todos);
        }
        if (ans.select === "update") {
            let updateTodo = await inquirer.prompt({
                type: "list",
                message: "update items in the list",
                name: "todo",
                choices: todos.map(item => item)
            });
            let addTodo = await inquirer.prompt({
                type: "input",
                message: "Add items in thhe list",
                name: "todo",
            });
            let newTodo = todos.filter(val => val !== updateTodo.todo);
            todos = [...newTodo, addTodo.todo];
            console.log(todos);
        }
        if (ans.select === "view") {
            console.log(chalk.yellow.bold("*** TO DO LIST ***"));
            console.log("**************************");
        }
        if (ans.select === "delete") {
            let deleteTodo = await inquirer.prompt({
                type: "list",
                message: "update items in the list",
                name: "todo",
                choices: todos.map(item => item)
            });
            let newTodo = todos.filter(val => val !== deleteTodo.todo);
            todos = [...newTodo];
            console.log(todos);
        }
    } while (true);
}
createTodo(todos);
