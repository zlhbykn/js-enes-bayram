// element silmek

const todoList = document.querySelector(".list-group");
const todos = document.querySelectorAll(".list-group-item");
const todo1 = document.querySelector(".list-group-item");


// 1. silme yöntemi-remove
/*
todos[0].remove();
todos[1].remove();
*/

// todos[todos.length-1].remove();

// todo1.remove();   
// todo1 querySlector ile yakaladık listenin ilk elemanını yakalar



console.log(todos);

// 2. silme yöntemi- remove child

todoList.removeChild(todos[0]);
todoList.removeChild(todoList.lastElementChild);












