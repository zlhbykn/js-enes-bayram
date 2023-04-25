// elementleri değiştirmek

const cardBody = document.querySelectorAll(".card-body")[1];

const newTitle = document.createElement("h2");
newTitle.className="card-title";
newTitle.textContent= "To Do Listesi-Yeni";



cardBody.replaceChild(newTitle,cardBody.childNodes[1]);

console.log(cardBody.childNodes[1]);





