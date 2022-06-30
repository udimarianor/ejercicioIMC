var botonBuscar = document.querySelector("#buscar-paciente");
botonBuscar.addEventListener("click", function(){
    //console.log("buscando pacientes");
    //para conectarme con la api
    //https://alura-es-cursos.github.io/api-pacientes/pacientes.json
    //uso un objeto XMLHttpRequest (ver)
    var xhr = new XMLHttpRequest;
    xhr.open("GET", "https://alura-es-cursos.github.io/api-pacientes/pacientes.json");
    xhr.addEventListener("load", function(){
        console.log(xhr.responseText);
    });
    xhr.send();


});
