var titulo = document.querySelector(".titulo");

titulo.textContent = "Aparecida nutricioninsta";

function calcularImcs() {

  var pacientes = document.querySelectorAll(".paciente");

  for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];

    var tdAltura = paciente.querySelector(".info-altura");
    var tdPeso = paciente.querySelector(".info-peso");
    var tdImc = paciente.querySelector(".info-imc");

    var altura = tdAltura.textContent;
    var peso = tdPeso.textContent;

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    if(!pesoEhValido){
     console.log("Peso inválido")
     tdPeso.textContent = "Peso inválido";
     var pesoEhValido = false;
   }
   if(!alturaEhValida){
     console.log("Altura inválida")
     tdAltura.textContent = "Altura inválida";
     var alturaEhValida = false;
   }

   if (alturaEhValida && pesoEhValido) {
       tdImc.textContent = calculaImc(peso, altura);
   } else {
       paciente.classList.add("paciente-invalido");
       tdImc.textContent = "Altura e/ou peso inválidos!";
   }
  }
}

function validaPeso(peso) {
  if(peso > 0 && peso < 1000){
    return true;
  } else {
    return false;
  }
}

function validaAltura(altura) {
  if(altura > 0 && altura < 3){
    return true;
  } else {
    return false;
  }
}

function calculaImc(peso, altura){
  var imc = 0;

  imc = peso / (altura * altura);

  return imc.toFixed(2);
}

calcularImcs();
