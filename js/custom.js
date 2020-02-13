

//Parallax

$(document).ready(function(){
  $('.parallax').parallax();
});

$('.carousel.carousel-slider').carousel({
fullWidth: true,
indicators: true,
dist: -100,
shift: 10,
duration: 200,

});

//Carousel



function next(){
  var instance = M.Carousel.getInstance(document.querySelector(".carousel"));
  instance.next();
}

function prev(){
  var instance = M.Carousel.getInstance(document.querySelector(".carousel"));
  instance.prev();
}

autoplay()   
function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 4500);
}

//Box Image

$(document).ready(function(){
  $('.materialboxed').materialbox();
});

//SideNav

$(document).ready(function(){
  $('.sidenav').sidenav();
});


//Dropdown

$(".dropdown-trigger").dropdown();

var body = document.querySelector(".body");


//Tabs
$(document).ready(function(){
  $('.tabs').tabs();
});

//Custom

function color(item){
  
  item.style.transform = "scale(1)";
  body.style.backgroundColor= "white";

}

function grey(item){
  item.style.transform = "scale(1.2)";
  body.style.backgroundColor= "rgb(150,166,102,50%)";
}


var but = document.querySelector(".button")