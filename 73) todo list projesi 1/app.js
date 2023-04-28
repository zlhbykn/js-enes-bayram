//! todo list projesi
const form = document.querySelectorAll(".card-body")[0].children[0];
const addInput = document.querySelector("#todoName");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const clearButton = document.querySelectorAll(".card-body")[1].children[3];
const filterInput = document.querySelector("#todoSearch");

let todos = [];

runEvents();

function runEvents() {
    form.addEventListener("submit",addTodo);
    document.addEventListener("DOMContentLoaded",pageLoaded);
    secondCardBody.addEventListener("click",removeTodoToUI);
    clearButton.addEventListener("click",allTodosEveryWhere);
    filterInput.addEventListener("keyup",filter);
}

function addTodo(e) {
    const inputText = addInput.value.trim();
    if (inputText == null || inputText == "") {
        showAlert("warning","lütfen boş bırakmayınız!");
    } else {
        //arayüze ekleme 
        addTodoToUI(inputText);
        //storage ekleme
        addTodoToStorage(inputText);
        //uyarı
        showAlert("success","todo eklendi");
    }
    e.preventDefault();
}

function addTodoToUI(newTodo) {
    /*
    <li class="list-group-item d-flex justify-content-between">Todo 1
                            <a href="#" class="delete-item">
                                <i class="fa fa-remove"></i>
                            </a>
                        </li>
    */

    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between";
    li.textContent = newTodo;

    const a = document.createElement("a");
    a.href = "#";
    a.className = "delete-item";

    const i = document.createElement("i");
    i.className = "fa fa-remove";

    a.appendChild(i);
    li.appendChild(a);
    todoList.appendChild(li);

    addInput.value = "";
}

function addTodoToStorage(newTodo) {
    checkTodosFromStorage();
    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function checkTodosFromStorage() {
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
}

function showAlert(type, message) {
    /* <div class="alert alert-warning" role="alert">
           This is a warning alert—check it out!
        </div>
    */
   const br = document.createElement("br");
   firstCardBody.appendChild(br);

   const div = document.createElement("div");
   div.className="alert alert-"+type;
   div.role="alert";
   div.textContent=message;

   firstCardBody.appendChild(div);

   setTimeout(function(){
            div.remove();
            br.remove();
   },2500);
}

function pageLoaded(){
    checkTodosFromStorage();
    todos.forEach(function(todo){
        addTodoToUI(todo);
    })
}

function removeTodoToUI(e){
    if(e.target.className ==="fa fa-remove"){
        //ekrandan silmek
       const todo = e.target.parentElement.parentElement;
       todo.remove();
       showAlert("success","todo başarıyla silindi");
        // storage den silmek
        removeTodoToStorage(todo.textContent);
    }
}

function removeTodoToStorage(removeTodo){
    checkTodosFromStorage();
    todos.forEach(function(todo,index){
        if(removeTodo===todo){
            todos.splice(index,1);
        }
    });
    localStorage.setItem("todos",JSON.stringify(todos));
}

function allTodosEveryWhere(){
    const todoListesi = document.querySelectorAll(".list-group-item");
    
    if(todoListesi.length>0){
        //ekrandan silme
        todoListesi.forEach(function(todo){
            todo.remove();
        });
        //storage dan silme
        todos = [];
        localStorage.setItem("todos",JSON.stringify(todos));
        showAlert("success","başarılı bir şekilde silindi");
    
    }else{
        showAlert("warning","silmek için en az bir todo olmalıdır.");
    }
    
}

function filter(e){
    const filtervalue = e.target.value.toLowerCase().trim();
    const todoListesi = document.querySelectorAll(".list-group-item");
    if(todoListesi.length>0){
        todoListesi.forEach(function(todo){
            if(todo.textContent.toLowerCase().trim().includes(filtervalue)){
                    todo.setAttribute("style","display : block");
            }else{
                    todo.setAttribute("style","display : none !important");
            }
    });
    }else{
        showAlert("warning","Filtreleme yapmak için en az bir todo olmalıdır.")
    }
}










