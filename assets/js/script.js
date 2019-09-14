/// <reference path="../../typings/globals/jquery/index.d.ts" />

$(function () {
   $('[data-toggle="tooltip"]').tooltip({ boundary: 'window' });
   $('[data-toggle="popover"]').popover();

   // $("#nome").addEventListener("blur", function() { nomeValidoFunction() }, false)
   $("#id-form").submit(function(e) { validaTudoFunction(e) })
});

function validaTudoFunction(e) {
   alert("valida tudo")
   e.preventDefault()

   let nome_valido = nomeValidoFunction()
   let sexo_valido = sexoValidoFunction()
   let passeio_valido = passeioValidoFunction()
   let excursao_valida = excursaoValidaFunction()

   if (nome_valido && sexo_valido && passeio_valido && excursao_valida) {
      alert("Tudo Ok!")
      // $("#id-form").submit()
   }
   else {
      alert ("Deu erro!")
   }
}

function excursaoValidaFunction() {
   let ilha = $("#ilha")
   let paraty = $("#paraty")
   let buzios = $("#buzios")

   let feedback_excursao = $("#feedback-excursao")

   let botoes = $("input.excursao:checked")
   if (botoes.length === 0) {
      ilha.addClass("is-invalid")
      ilha.removeClass("is-valid")
      paraty.addClass("is-invalid")
      paraty.removeClass("is-valid")
      buzios.addClass("is-invalid")
      buzios.removeClass("is-valid")
      feedback_excursao.addClass("d-block")
      return false
   }
   else {
      ilha.addClass("is-valid")
      ilha.removeClass("is-invalid")
      paraty.addClass("is-valid")
      paraty.removeClass("is-invalid")
      buzios.addClass("is-valid")
      buzios.removeClass("is-invalid")
      feedback_excursao.removeClass("d-block")
      return true
   }
}

function passeioValidoFunction() {
   let passeio = $("#passeio")

   if (passeio.val() === '') {
      passeio.addClass("is-invalid")
      passeio.removeClass("is-valid")
      return false
   }
   else {
      passeio.removeClass("is-invalid")
      passeio.addClass("is-valid")
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