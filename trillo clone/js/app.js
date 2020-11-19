// Selectors
const todoInput = document.querySelector(".todo__new--input"),
    todoBtn = document.querySelector(".btnAdd"),
    delBtn = document.querySelector(".btnDel"),
    swapBtn = document.querySelector(".swap"),
    todoList = document.querySelector(".todo__list--items"),
    todoItem = document.querySelector(".todo__list--item"),
    draggables = document.querySelectorAll(".draggable"),
    dragContainers = document.querySelectorAll(".todo__list--items");
let progress = [1,2,3],
    finished = [4,5,6];

// Eventlisteners
todoBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteTodo);
window.onload = getTodos()



//Functions

//Drag n drop

function swapItem(e){
    e.preventDefault();
    const item = e.target
    if(item.classList[0] === "swap"){
        const todoItem = item.parentElement;

    }
}

////////
function addTodo(e){
    e.preventDefault();
   if(todoInput.value === ""){
       return
   }else{
        const todoHtml = `
        <div class="todo__list--item draggable" draggable="true">
            <li class="todo__item">${todoInput.value}</li>
            <button class="btn btnDel"><i class="far fa-trash-alt"></i></button>
        </div>
        `;
        saveTodo(todoInput.value)
        todoList.innerHTML += todoHtml;
        todoInput.value = '';
   }
}

function deleteTodo(e){
    const item = e.target;
    
    if(item.classList[1] === "btnDel"){
        const todo = item.parentElement;
        removeTodo(todo);
        todo.remove();
       
    } 
}

function saveTodo(todo){
    let todos
    if(localStorage.getItem("todos") === null){
        todos = [];
    }else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos(){
    let todos,
    progress,
    finished;
    if(localStorage.getItem("todos") === null){
        todos = [];
        
    }else {
        todos = JSON.parse(localStorage.getItem("todos"));
        progress = JSON.parse(localStorage.getItem("progress"));
        finished = JSON.parse(localStorage.getItem("finished"));
    }
    todos.forEach(todo => {
        todoList.innerHTML += `
        <div class="todo__list--item draggable" draggable="true">
            <li class="todo__item">${todo}</li>
            <button class="btn btnDel"><i class="far fa-trash-alt"></i></button>
            <button class="swap">swap</button>
        </div>
        `;
    });
   
}

function removeTodo(todo){
    let todos
    if(localStorage.getItem("todos") === null){
        todos = [];
    }else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem("todos", JSON.stringify(todos))
} 

