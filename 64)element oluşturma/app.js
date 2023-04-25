//dinamik olarak element oluşturma

const cardBody=document.querySelectorAll(".card-body")[1];
console.log(cardBody);


const link = document.createElement("a");
link.id="goBlogWebSite";
link.className="btn btn-dark btn-sm mt-3";
link.href="http://enesbayram.net";
link.target="_blank";
link.textContent="Kişisel Web Siteme Git";


cardBody.appendChild(link);
console.log(link);

//!--------------------------------------

const ul = document.querySelector(".list-group");


const todo =document.createElement("li");
const todoLink= document.createElement("a");
const i=document.createElement("i");


todo.className="list-group-item d-flex justify-content-between";
todo.innerHTML="Todo 5";

todoLink.className="delete-item";
todoLink.href="#";

i.className="fa fa-remove";

todoLink.appendChild(i);
todo.appendChild(todoLink);
ul.appendChild(todo);



/*
<li class="list-group-item d-flex justify-content-between">Todo 4
                            <a href="#" class="delete-item">
                                <i class="fa fa-remove"></i>
                            </a>
                        </li>

*/





















