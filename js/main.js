$( document ).ready(function() {

  document.getElementById("scroll-secuence-inside").style.height = "0%";

  window.onscroll = function() { showProgress() };

      function showProgress() {
      let scrollCalculate = document.body.scrollTop || document.documentElement.scrollTop;
      let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      let scrolled = (scrollCalculate / height) * 100;
      document.getElementById("scroll-secuence-inside").style.height = scrolled + "%";


   }
   



});

