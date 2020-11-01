$( document ).ready(function() {

  document.getElementById("scroll-secuence-inside").style.height = "0%";

  window.onscroll = function() {showProgress()};

      function showProgress() {
      var scrollCalculate = document.body.scrollTop || document.documentElement.scrollTop;
      var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      var scrolled = (scrollCalculate / height) * 100;
      document.getElementById("scroll-secuence-inside").style.height = scrolled + "%";

   }
   
$('.j-galery').slick({
   dots: true,
   infinite: true,
   speed: 300,
   slidesToShow: 1
});

});

