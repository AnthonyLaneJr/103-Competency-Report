let todoList = [];

function addTask(){
    let task = document.getElementById(`todo`).value;
    todoList.push(task);
    console.log(todoList);
    showTasks();
}

function showTasks(){
    let ulList = document.getElementById(`todoList`);
    ulList.innerHTML= ``;
    let bodyList = ``;

    for(let i=0; i<todoList.length; i++){
        bodyList += `<div class="task-item">
        <li> <span>${todoList[i]}</span> <button class="remove" id="deleteButton" onclick="remove(${i})">X</button></li>
        </div>`;
    }
    ulList.innerHTML = bodyList;
}

function remove(index){
    todoList.splice(index,1);
    showTasks();
}
function minusAllTasks(index){
    todoList.splice(index,todoList.length);
    showTasks();
}

function init(){

}

window.onload = init; //Causes js to load after completeion of html loading