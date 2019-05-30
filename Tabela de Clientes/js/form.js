var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var paciente = obtemPacienteDoFormulario(form);
    
    var erros = validaPaciente(paciente);

    var divErro = document.querySelector("#div-erro");

    if(erros.length > 0){
      mostraEscondeDiv(divErro, "block");
      exibeErro(erros);
      return;
    } else {
      limparUl(document.querySelector("#mensagens-erro"));
      mostraEscondeDiv(divErro, false);
    }

    adicionaPacienteTabela(paciente);

    form.reset();
});

function adicionaPacienteTabela(paciente) {
  var pacienteTr = montaTr(paciente);
  var tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);
}

function obtemPacienteDoFormulario(form) {

  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value)
  }

  return paciente;
}

function montaTr(paciente) {
  //Cria linhas e colunas do novo paciente
  var pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");

  //Dita a hierarquia das novas linhas e colunas e da tabela
  pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
  pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
  pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
  pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

  return pacienteTr;
}

function montaTd(dado, classe) {
  var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);

  return td;
}

function validaPaciente(paciente) {

  var erros = [];

  if(paciente.nome.length == 0) erros.push("Paciente inválido!");

  if(!validaPeso(paciente.peso)) erros.push("Peso é inválido!");

  if(!validaAltura(paciente.altura)) erros.push("Altura é inválida!");

  if(paciente.gordura.length == 0) erros.push("% de Gordura inválida!");

  return erros;
}

function exibeErro(erros) {
  var ul = document.querySelector("#mensagens-erro");
  limparUl(ul);
  erros.forEach(function(erro) {
    var li = document.createElement("li");
    li.classList.add("lista-erros")
    li.textContent = erro;
    ul.appendChild(li);
  });
}

function limparUl(ul) {
  ul.innerHTML = "";
}

function mostraEscondeDiv(div, visibilidade) {
  if (visibilidade) {
    div.classList.remove("invisivel");
  } else {
    div.classList.add("invisivel");
  }
}
