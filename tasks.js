import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filePath = path.join(__dirname, "tasks.json");


//load task which will convert json data into javascript array
function loadTask(){
    try {
        const data = fs.readFileSync(filePath, "utf-8")
        return JSON.parse(data);
    } catch (error) {
        return []; //If file not found or Invalid then this will return empty list
    }
}

function saveTasks(tasks){
    fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
}

let tasks = loadTask();

function addTask(text) {
    const newTask = {
        id: tasks.length + 1,
        text,
        completed: false
    };
    tasks.push(newTask);
    saveTasks(tasks)
    console.log(`Task added: "${text}"`)
}

function listTask(){
    if(tasks.length === 0){
        console.log("There are no tasks available");        
    }

    // console.log(tasks);
    tasks.forEach(task => {
        console.log(`[${task.completed ? "✔" : " "}] ${task.id}: ${task.text}`);
    })
}

function completeTask(id){
    const task = tasks.find(t => t.id === id);
    if(task){
        task.completed = true;
        saveTasks(tasks);
        console.log(`Task ${id} marked as completed`)
    }else{
        console.log(`Task ${id} not found`);
        
    }
}

function deleteTask(id){  
    const index = tasks.findIndex( t => t.id === id);
    // console.log(index)
    
    if(index !== -1){
        const removed = tasks.splice(index, 1)[0];
        saveTasks(tasks);
        console.log(`Task with id ${removed.text} is successfully removed:`)
    }else{
        console.log(`Task id ${id} not found`);
        
    }
}
export {addTask, listTask, completeTask, deleteTask};
