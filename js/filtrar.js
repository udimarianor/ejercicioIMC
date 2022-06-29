var campoFiltro = document.querySelector("#filtrar-tabla");
console.log(campoFiltro);

campoFiltro.addEventListener("input", function () {

    //capturo el valor del input
    //console.log("escribieron en el input");
    console.log(this.value);

    //tengo que capturar los pacientes
    var pacientes = document.querySelectorAll(".paciente");
    //console.log(pacientes);

    //si hay algo escrito iterame y compara
    if (this.value.length > 0) {
        //comparar con los pacientes...  hay que iterar
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            var tdNombre = paciente.querySelector(".info-nombre");
            var nombre = tdNombre.textContent;
            //console.log(nombre);
            //vamos a usar "expresiones regulares" para comparar... es un tipo objeto y tiene sus métodos, ver
            var expresion = new RegExp(this.value,"i");

            //uso la función de las RegExp "test" y le paso como param nombre, o sea busca si expresion está dentro
            //de nombre
            if (!expresion.test(nombre)) {
                paciente.classList.add("invisible");
            } else {
                paciente.classList.remove("invisible");
            }
        }
        //si está vacío mostrá todo 
    }else{
        for(var i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            paciente.classList.remove("invisible");
        }
    }


});