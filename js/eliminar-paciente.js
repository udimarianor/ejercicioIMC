var pacientes = document.querySelectorAll(".paciente");

/*
pacientes.forEach(function(paciente){
    paciente.addEventListener("dblclick",function(){
        this.remove();
    });
});
*/

var tabla = document.querySelector("#tabla-pacientes");

tabla.addEventListener("dblclick", function(event){
    //this acá no es correcto porque el objeto dueño es la tabla
    //vamos con event target pero eliminaría solo el td...
    event.target.parentNode.classList.add("fadeOut");
    //le coloco un intervalo para que haga efecto la animación...
    setTimeout(function(){
        event.target.parentNode.remove();
    },400);
    //400 milisegundos
});