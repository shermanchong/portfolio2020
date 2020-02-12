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

var instance = M.Carousel.getInstance(document.querySelector(".carousel"));

function next(){
  instance.next();
}

function prev(){
  instance.prev();
}

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
  item.style.transform = "scale(1.2)";
  body.style.backgroundColor= "rgb(150,166,102,50%)";
}


var but = document.querySelector(".button")