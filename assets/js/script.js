/// <reference path="../../typings/globals/jquery/index.d.ts" />

$(function () {
   $('[data-toggle="tooltip"]').tooltip({ boundary: 'window' });
   $('[data-toggle="popover"]').popover();

   // $("#nome").addEventListener("blur", function() { nomeValidoFunction() }, false)
   $("#cadastro-form").submit(validaTudoFunction(e));
});

function validaTudoFunction(e) {
   alert("valida tudo")
   e.preventDefault()

   let nome_valido = nomeValidoFunction()
   let sexo_valido = sexoValidoFunction()
   let cidade_valida = cidadeValidoFunction()
   let opcoes_validas = opcoesValidaFunction()

   if (nome_valido && sexo_valido && cidade_valida && opcoes_validas) {
      alert("Tudo Ok!")
      // $("#id-form").submit()
   }
   else {
      alert ("Deu erro!")
   }
}

function opcoesValidaFunction() {
   let email = $("#email")
   let informacoesPessoais = $("#informacoesPessoais")
   let salvar = $("#salvar")

   let feedback_opcoes = $("#feedback-opcoes")

   let botoes = $("input.opcoes:checked")
   if (botoes.length === 0) {
      email.addClass("is-invalid")
      email.removeClass("is-valid")
      informacoesPessoais.addClass("is-invalid")
      informacoesPessoais.removeClass("is-valid")
      salvar.addClass("is-invalid")
      salvar.removeClass("is-valid")
      feedback_opcoes.addClass("d-block")
      return false
   }
   else {
      email.addClass("is-valid")
      email.removeClass("is-invalid")
      informacoesPessoais.addClass("is-valid")
      informacoesPessoais.removeClass("is-invalid")
      salvar.addClass("is-valid")
      salvar.removeClass("is-invalid")
      feedback_opcoes.removeClass("d-block")
      return true
   }
}

function cidadeValidoFunction() {
   let cidade = $("#cidade")

   if (cidade.val() === '') {
      cidade.addClass("is-invalid")
      cidade.removeClass("is-valid")
      return false
   }
   else {
      cidade.removeClass("is-invalid")
      cidade.addClass("is-valid")
      return true
   }
}

function sexoValidoFunction() {
   let sexo_masc = $("#sexo-masc")
   let sexo_fem = $("#sexo-fem")

   let sexo_feedback = $("#sexo-feedback")

   let botoes = $("input[name='sexo']:checked")
   if (botoes.length === 0) {
      sexo_masc.addClass("is-invalid")
      sexo_masc.removeClass("is-valid")
      sexo_fem.addClass("is-invalid")
      sexo_fem.removeClass("is-valid")
      sexo_feedback.addClass("d-block")
      return false
   }
   else {
      sexo_masc.removeClass("is-invalid")
      sexo_masc.addClass("is-valid")
      sexo_fem.removeClass("is-invalid")
      sexo_fem.addClass("is-valid")
      sexo_feedback.removeClass("d-block")
      return true
   }
}

function nomeValidoFunction() {
   alert("nome valido")
   let nome = $("#nome")

   if (nome.val() === '') {
      nome.addClass("is-invalid")
      nome.removeClass("is-valid")
      return false
   }
   else {
      nome.removeClass("is-invalid")
      nome.addClass("is-valid")
      return true
   }
}