// input eventleri


//focus-inputun içine girdiğinde çalışır
//blur-inputun içinden çıktığında çalışır
//copy-inputun içindeki değeri kopyalamayı yakalar
//paste-inputun içine bir şey kopyalandığında çalışır
//cut-inputun içine bir şey kesildiğinde çalışır
//select- inputun içinden bir kısmı seçip bıraktığımız anda tetiklenir


const todo = document.querySelector("#todoName");

todo.addEventListener("focus",run);
todo.addEventListener("blur",run);
todo.addEventListener("copy",run);
todo.addEventListener("paste",run);
todo.addEventListener("cut",run);
todo.addEventListener("select",run);


function run(e){
    console.log(e.type);
}

















