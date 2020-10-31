$( document ).ready(function() {
  console.log( "ready!" );
  window.onscroll = function() {showProgress()};
   function showProgress() {
      var scrollCalculate = document.body.scrollTop || document.documentElement.scrollTop;
      var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      var scrolled = (scrollCalculate / height) * 100;
      document.getElementById("scroll-secuence-inside").style.height = scrolled + "%";
   }

});

