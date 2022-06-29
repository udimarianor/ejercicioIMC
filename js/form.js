var botonAdicionar = document.querySelector("#adicionar-paciente");

botonAdicionar.addEventListener("click", function (event) {
    event.preventDefault();

    var form = document.querySelector("#form-adicionar");
    var paciente = capturarDatosPaciente(form);
    var pacienteTr = construirTr(paciente);

    var errores = validarPaciente(paciente);

    if (errores.length > 0) {
        exhibirMensajesErrores(errores);
        return;
        //el return vacío es una forma de cortar la función anónima que está corriendo
    }

    var tabla = document.querySelector("#tabla-pacientes");
    tabla.appendChild(pacienteTr);
    form.reset();

    var mensajesErrores = document.querySelector("#mensajes-errores");
    mensajesErrores.innerHTML = "";

});

function capturarDatosPaciente(form) {
    //capturando los datos del formulario
    var paciente = {
        nombre: form.nombre.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcularIMC(form.peso.value, form.altura.value)
    }
    return paciente;
}

function construirTr(paciente) {

    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(construirTd(paciente.nombre, "info-nombre"));
    pacienteTr.appendChild(construirTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(construirTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(construirTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(construirTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function construirTd(dato, clase) {
    var td = document.createElement("td");
    td.classList.add(clase);
    td.textContent = dato;
    return td;
}

function validarPaciente(paciente) {
    var errores = [];

    if (paciente.nombre.length == 0) {
        errores.push("El nombre está vacío");
    }
    if (paciente.peso.length == 0) {
        errores.push("El peso está vacío");
    }
    if (paciente.altura.length == 0) {
        errores.push("La altura está vacía");
    }
    if (paciente.gordura.length == 0) {
        errores.push("El porcentaje de gordura está vacío");
    }

    if (!errores.length > 0) {
        if (!validarPeso(paciente.peso)) {
            errores.push("El peso es incorrecto");
        }
        if (!validarAltura(paciente.altura)) {
            errores.push("La altura es incorrecta");
        }
    }

    return errores;
}

function exhibirMensajesErrores(errores) {
    var ul = document.querySelector("#mensajes-errores");
    ul.innerHTML = "";
    errores.forEach(function(error){
        var li = document.createElement("li");
        li.textContent = error;
        ul.appendChild(li);
    });
}