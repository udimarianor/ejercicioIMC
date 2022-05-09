var botonAdicionar = document.querySelector("#adicionar-paciente");

botonAdicionar.addEventListener("click", function (event) {
    //uso una FUNCIÓN ANÓNIMA y le paso como parámetro event para poder usar luego PREVENT DEFAULT y que no
    //recargue la página
    event.preventDefault();

    var form = document.querySelector("#form-adicionar");
    var paciente = capturarDatosPaciente(form);
    var pacienteTr = crearTR(paciente);
    if (!validarPaciente(paciente)) {
        alert("paciente incorrecto");
        return; //este return en el if me CORTA LA FUNCIÓN ANÓNIMA!
    }

    var tabla = document.querySelector("#tabla-pacientes");
    tabla.appendChild(pacienteTr);
    
    form.reset();
});

function capturarDatosPaciente(form) {
    var paciente = {
        nombre : form.nombre.value,
        peso : form.peso.value,
        altura : form.altura.value,
        gordura : form.gordura.value,
        imc : calcularIMC(form.peso.value, form.altura.value)
    }
    return paciente;
}

function crearTR(paciente){

    //crear los tds y un tr
    var pacienteTR = document.createElement("tr");
    pacienteTR.classList.add("paciente");

    var nombreTD = construirTd(paciente.nombre, "info-nombre");
    var pesoTD = construirTd(paciente.peso, "info-peso");
    var alturaTD = construirTd(paciente.altura, "info-altura");
    var gorduraTD = construirTd(paciente.gordura, "info-gordura");
    var imcTD = construirTd(paciente.imc, "info-imc");

    pacienteTR.appendChild(nombreTD);
    pacienteTR.appendChild(pesoTD);
    pacienteTR.appendChild(alturaTD);
    pacienteTR.appendChild(gorduraTD);
    pacienteTR.appendChild(imcTD);

    return pacienteTR;
}

function construirTd(dato, clase){
    var td = document.createElement("td");
    td.classList.add(clase);
    td.textContent = dato;
    return td;
}

function validarPaciente(paciente){
    if (validarPeso(paciente.peso)) {
        return true
    } else {
        return false;
    }
}