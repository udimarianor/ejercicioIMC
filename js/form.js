var botonAdicionar = document.querySelector("#adicionar-paciente");

botonAdicionar.addEventListener("click", function (event) {
    //uso una FUNCIÓN ANÓNIMA y le paso como parámetro event para poder usar luego PREVENT DEFAULT y que no
    //recargue la página
    event.preventDefault();

    var form = document.querySelector("#form-adicionar");
    var tabla = document.querySelector("#tabla-pacientes");

    var nombre = form.nombre.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var pacienteTR = document.createElement("tr");
    var nombreTD = document.createElement("td");
    var pesoTD = document.createElement("td");
    var alturaTD = document.createElement("td");
    var gorduraTD = document.createElement("td");
    var imcTD = document.createElement("td");
    //acá cree una etiqueta tr y cinco tr

    nombreTD.textContent = nombre;
    pesoTD.textContent = peso;
    alturaTD.textContent = altura;
    gorduraTD.textContent = gordura;
    imcTD.textContent = calcularIMC(peso, altura);

    pacienteTR.appendChild(nombreTD);
    pacienteTR.appendChild(pesoTD);
    pacienteTR.appendChild(alturaTD);
    pacienteTR.appendChild(gorduraTD);
    pacienteTR.appendChild(imcTD);

    tabla.appendChild(pacienteTR);

});