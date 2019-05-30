var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
  var pacientes = document.querySelectorAll(".paciente");
  pacientes.forEach(function(paciente) {
    var tdNome = paciente.querySelector(".info-nome");
    var nome = tdNome.textContent;
    var valorFiltro = campoFiltro.value;
    var expressao = new RegExp(valorFiltro, "i");
    if ((!expressao.test(nome)) && valorFiltro.length != 0) {
      paciente.classList.add("invisivel");
    } else {
      paciente.classList.remove("invisivel");
    }
  });

});
