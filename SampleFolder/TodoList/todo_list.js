const taskInput=document.getElementById('taskInput');
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");
const clearAllTasksBtn=document.getElementById('clearAll');
let tasks=[];
function addTask(){
    const taskText=taskInput.value.trim();
    if(taskText){
        tasks.push({text:taskText});
        displayTasks();
        taskInput.value="";
       
    }
}
function displayTasks(){
    debugger;
    taskList.innerHTML="";
    tasks.forEach((task,index)=>{
        const li=document.createElement('li');
        li.innerHTML=`<input type="checkbox" id="task-${index}" ${task.completed?"checked":""}>
        <label for="task-${index}">${task.text}</label>`;
        li.querySelector('input').addEventListener('change',()=>toggleTask(index));
        taskList.appendChild(li);
        
    });
function toggleTask(index){
    tasks[index].completed= !tasks[index].completed;
    displayTasks();
}
}
function clearCompletedTasks(){
    tasks=tasks.filter(task=> !task.completed);
    displayTasks();
}
function clearAllTasks(){
    tasks.forEach(item=>item.completed=true);
    tasks=tasks.filter(task=>!task.completed)
    displayTasks();
}
addTaskBtn.addEventListener('click',()=>addTask());
clearCompletedBtn.addEventListener('click',()=>clearCompletedTasks());
clearAllTasksBtn.addEventListener('click',()=>clearAllTasks());
// displayTasks();