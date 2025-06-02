import readline from "readline";
import { addTask, listTask, completeTask, deleteTask } from "./tasks.js";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function showMenu(){
    console.log(`
        ========= TO-DO Task List ===========
        1. Add Task
        2. List Task
        3. Mark Task as completed Task
        4. Delete Task
        0. Exit
        `);
    rl.question("Choose an Option: ", handleMenu);
}

function handleMenu(choice){
    switch (choice.trim()){
        case "1":
            rl.question("Enter task description: ", (taskText) => {
                addTask(taskText);
                showMenu();
        });
            break;
        case "2":
            listTask();
            showMenu();
            break;
        case "3":
            rl.question("Enter task ID to mark as completed: ", (id) => {
                const taskId = parseInt(id);
                completeTask(taskId);
                showMenu();
            });
            break;
        case "4":
             rl.question("Enter task ID to Delete: ", (id) => {
                const taskId = parseInt(id);
                deleteTask(taskId);
                showMenu();
             });
             break;
        case "0":
            console.log("Bye See you soon!")
            rl.close();
            break;
        default:
            console.log("Invalid option. Please choose Valid option");
            showMenu();
        
    }
}

export {showMenu};