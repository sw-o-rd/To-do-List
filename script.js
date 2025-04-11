const inputBox = document.getElementById("src-bar");
const taskContainer = document.getElementById("task-container");
const cuerpo = document.querySelector(".todo-app");
const titulo = document.querySelector(".body");
const dark = document.querySelector(".dark-button");
const etiqueta = document.getElementsByTagName("LI");
const usuario = document.getElementById("usuario");
const image = document.querySelector(".todo-img");
const body = document.getElementsByTagName("body");
const bloqueo = document.querySelector(".bloqueador");
const listas = document.getElementsByTagName("LI");



dark.addEventListener("click", e => {
    dark.classList.toggle("clear-button");
    cuerpo.classList.toggle("todo-appd");
    document.querySelector(".container").classList.toggle("containerd");
    document.querySelector(".button-add-bar").classList.toggle("button-add-bard");
    
    if (listas.classList.contains("tarea")) {
        document.getElementsByTagName("LI").classList.toggle("taread");
    }

    document.querySelector(".user-ventana").classList.toggle("user-ventanad");
    document.querySelector(".user-ventanad").classList.add("user-ventana");
    document.querySelector(".ventana").classList.toggle(".ventanad")
})

window.onload = function (){
    // bloqueador
    //contenedor-usuario
    let uedit = document.createElement("DIV");
    uedit.classList.add("user-ventana");
    //compo de texto edicion-usuario
    let uinput = document.createElement("INPUT");
    uinput.setAttribute("type","text")
    uinput.classList.add("user-input")
    uinput.setAttribute("maxlength", "12")
    //boton del dialogo-usuario
    let ubutton = document.createElement("BUTTON");
    ubutton.classList.add("user-button");
    ubutton.innerHTML = "Listo";
    //apendChilds
    uedit.appendChild(uinput);
    cuerpo.appendChild(uedit);
    uedit.appendChild(ubutton);
    ubutton.addEventListener("click" , e => {
    if (uinput.value === "") {
        usuario.innerHTML = "To-Do List"
        salvado()
        e.target.parentElement.remove();
    }
    else{
    usuario.innerHTML = uinput.value + "'s " + "To do List" + image.innerHTML;
    salvado()
    e.target.parentElement.remove();
    
    }
    bloqueo.setAttribute("hidden", "")
    })
}

usuario.addEventListener("click", e =>{
    //bloquo
    bloqueo.removeAttribute("hidden", "")
    //contenedor-usuario
    let uedit = document.createElement("DIV");
    if (dark.classList.contains("clear-button")) {
        uedit.classList.add("user-ventanad")
    }
    else if (dark.classList.contains("dark-button")) {
        uedit.classList.add("user-ventana")
    }
    /*uedit.classList.add("user-ventana")*/
    //compo de texto edicion-usuario
    let uinput = document.createElement("INPUT");
    uinput.setAttribute("type","text")
    uinput.classList.add("user-input")
    uinput.setAttribute("maxlength", "12")
    //boton del dialogo-usuario
    let ubutton = document.createElement("BUTTON");
    ubutton.classList.add("user-button");
    ubutton.innerHTML = "Listo";
    //apendChilds
    uedit.appendChild(uinput);
    cuerpo.appendChild(uedit);
    uedit.appendChild(ubutton);
    ubutton.addEventListener("click" , e => {
    if (uinput.value === '') {
        e.target.parentElement.remove();
    }
    else{
    usuario.innerHTML = uinput.value + "'s " + "To do List" + image.innerHTML;
    salvado()
    e.target.parentElement.remove();
    
    }
    bloqueo.setAttribute("hidden", "")
    })

})


function addTask(){
    if (inputBox.value === '') {
        alert("pon algo subnormal")
    }
    else{
        bloqueo.setAttribute("hidden", "")
        let li = document.createElement("LI");
        li.classList.add("tarea");
        li.innerHTML = inputBox.value;
        taskContainer.appendChild(li);
        let span = document.createElement("SPAN");
        span.innerHTML = "\u00d7";
        let edit = document.createElement("BUTTON");
        edit.innerHTML = ""
        edit.classList.add("edit");
        li.appendChild(span);
        li.appendChild(edit);
    }
    inputBox.value ="";
    salvado()
}

taskContainer.addEventListener("click", function (e) {
    if (e.target.tagName == "LI") {
            e.target.classList.toggle("checked")
        salvado()
    }
    else if(e.target.tagName == "SPAN")
    {
        e.target.parentElement.remove();
        salvado()
    }
    else if (e.target.tagName == "BUTTON") {
        //bloqueador
        bloqueo.removeAttribute("hidden", "")
        //contenedor
        let edit = document.createElement("DIV");
        edit.classList.add("ventana")
        //compo de texto edicion
        let input = document.createElement("INPUT");
        input.setAttribute("type","text")
        input.classList.add("edit-input")
        //boton del dialogo
        let ebutton = document.createElement("BUTTON");
        ebutton.classList.add("edit-button");
        ebutton.innerHTML = "Cambiar";
        ebutton.classList
        //apendChilds
        edit.appendChild(input);
        cuerpo.appendChild(edit);
        edit.appendChild(ebutton);
        console.log()
        //declaracios
        const ventana = document.querySelector(".ventana")
        const entrada = document.querySelector(".edit-input")
        //eventos
        ebutton.addEventListener("click", e => {
            if (entrada.value === "") {
                e.target.parentElement.remove();
                bloqueo.setAttribute("hidden", "") 
                recarga()
            }
            else{
                e.target.parentElement.remove();
                ///codigo de prueba
                let li = document.createElement("LI");
                li.innerHTML = entrada.value;
                taskContainer.appendChild(li);
                let span = document.createElement("SPAN");
                span.innerHTML = "\u00d7";
                let edit = document.createElement("BUTTON");
                edit.innerHTML = ""
                edit.classList.add("edit");
                li.appendChild(span);
                li.appendChild(edit);
                salvado()
                //codigo de prueba
                bloqueo.setAttribute("hidden", "") 
            }
            
        }
    )
        
        e.target.parentElement.remove();
    }
},false);




function salvado(){
    localStorage.setItem("data",taskContainer.innerHTML)
    localStorage.setItem("nombre",usuario.innerHTML)
}

function recarga() {
    taskContainer.innerHTML = localStorage.getItem("data");
    usuario.innerHTML = localStorage.getItem("nombre");
}




recarga()



