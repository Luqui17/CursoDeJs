var paciente = document.querySelector("#primeiro-paciente");

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i<pacientes.length;i++){

    console.log(pacientes[i]);

    var paciente = pacientes[i];
    var tdAltura = paciente.querySelector(".info-altura");
    var tdPeso = paciente.querySelector(".info-peso");
    var tdImc = paciente.querySelector(".info-imc");

    var altura = tdAltura.textContent;
    var peso = tdPeso.textContent;

    var alturaEhValida = true;
    var pesoEhValido = validaPeso(peso); //true or false

    if (!pesoEhValido) {
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido");
    }
    if (!alturaEhValida) {
        console.log("Altura inválida!");
        tdAltura.textContent = "Altura inválida!";
        alturaEhValida = false;
        paciente.classList.add("paciente-invalido");
        tdImc.textContent("Altura inválida");
    }
    if (alturaEhValida && pesoEhValido) {

        var imc = calculaImc(peso,altura)
        tdImc.textContent = imc;    
    } else {
        tdImc.textContent = "Altura e/ou peso inválidos!"
    }
}

function mostraMensagem(){
    console.log("Olá, eu fui clicado");
}

function validaPeso(peso){
    if (peso>=0 &&  peso < 1000) {
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura){
    if (altura>=0 && altura<=3.0){
        return true;
    }else{
        return false;
    }
}

function calculaImc(peso,altura){
    var imc = 0;
    var imc = peso / (altura * altura);
    return imc.toFixed(2);
}