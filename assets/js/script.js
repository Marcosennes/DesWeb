/// <reference path="../../typings/globals/jquery/index.d.ts" />

$(function () {
   $('[data-toggle="tooltip"]').tooltip();
   $('[data-toggle="popover"]').popover();
   let like = $("#data-like").data("like")
   let dislike = $("#data-dislike").data("dislike")
   $("#data-like").text(like)
   $("#data-dislike").text(dislike)

   $("#like").click(function () {
      if ($("#like").hasClass("far") && $("#dislike").hasClass("far")) {
         $("#like").removeClass("far").addClass("fas")
         like = like + 1
      }
      else {
         if($("#like").hasClass("fas")){
            $("#like").removeClass("fas").addClass("far")
            like = like - 1
         }
         else{
            $("#dislike").removeClass("fas").addClass("far")
            dislike = dislike - 1
            $("#like").removeClass("far").addClass("fas")
            like = like + 1
         }
      }
      $("#data-like").text(like)
      $("#data-dislike").text(dislike)
   })

   $("#dislike").click(function () {

      if ($("#like").hasClass("far") && $("#dislike").hasClass("far")) {
         $("#dislike").removeClass("far").addClass("fas")
         dislike = dislike + 1
      }
      else {
         if($("#dislike").hasClass("fas")){
            $("#dislike").removeClass("fas").addClass("far")
            dislike = dislike - 1
         }
         else{
            $("#like").removeClass("fas").addClass("far")
            like = like - 1
            $("#dislike").removeClass("far").addClass("fas")
            dislike = dislike + 1
         }
      }
      $("#data-like").text(like)
      $("#data-dislike").text(dislike)

   })

});








