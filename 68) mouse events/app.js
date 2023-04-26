// mouse events

//DOMContentLooaded-document üzerinden 
//load-window üzerinden
//click-tek tık
//dblclick-çift tık
//mouseover-cardbody üzerinde gezinme ama içindeki html etiketleri dahil 
// mouseout-üzerinden çıktığımızda
// mouseenter-cardbody üzerinde gezinme ama içindeki html etiketleri dahil değil
// mouseleave- cardbody dışında çıktığımızda gezinme

/*
document.addEventListener("DOMContentLoaded",run);

window.addEventListener("load",run);

function run(){
    console.log("sayfam yüklendi");

}
*/

const cardTitle = document.querySelectorAll(".card-title")[1];
const cardBody = document.querySelectorAll(".card-body")[1];



// cardTitle.addEventListener("dblclick",run);
// cardBody.addEventListener("mouseover",run);
// cardBody.addEventListener("mouseout",run);
// cardBody.addEventListener("mouseenter",run);
// cardBody.addEventListener("mouseleave",run);








function run(e){
    console.log(e.type);

}



















