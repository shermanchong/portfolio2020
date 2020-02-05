M.AutoInit();

$(document).ready(function(){
  $('.parallax').parallax();
});

$('.carousel.carousel-slider').carousel({
fullWidth: true,
indicators: true,
dist: 0,
shift: 10,

});

$(document).ready(function(){
  $('.materialboxed').materialbox();
});

$(document).ready(function(){
  $('.sidenav').sidenav();
});


$(".dropdown-trigger").dropdown();

var body = document.querySelector(".body");


function color(item){
  
  item.style.transform = "scale(1)";
  body.style.backgroundColor= "white";

}

function grey(item){
  item.style.transform = "scale(1.3)";
  body.style.backgroundColor= "rgb(150,166,102,50%)";
}
