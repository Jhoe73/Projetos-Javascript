var botaoBuscar = document.querySelector("#buscar-paciente");
var erroAjax = document.querySelector("#erro-ajax");

botaoBuscar.addEventListener("click", function() {
  console.log("Buscando pacientes...");

  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes");
  xhr.send();
  xhr.addEventListener("load", function() {

    if (xhr.status == 200) {
      erroAjax.classList.add("invisivel");
      var resposta = xhr.responseText;
      var pacientes = JSON.parse(resposta);
      pacientes.forEach(function(paciente) {
        adicionaPacienteTabela(paciente);
      });
    } else {
      erroAjax.classList.remove("invisivel");
      console.log(xhr.status);
      console.log(xhr.resoponseText);
    }
  })
})
