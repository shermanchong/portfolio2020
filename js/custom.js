//Sticky Navbar
window.onscroll = function () { stickyNav() };

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function stickyNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
};

//Parallax

$(document).ready(function () {
  $('.parallax').parallax();
});

$('.carousel.carousel-slider').carousel({
  fullWidth: true,
  indicators: true,
  dist: 0,
  shift: 10,
  duration: 200,

});

//Carousel



function next() {
  var instance = M.Carousel.getInstance(document.querySelector(".carousel"));
  instance.next();
}

function prev() {
  var instance = M.Carousel.getInstance(document.querySelector(".carousel"));
  instance.prev();
}

autoplay()
function autoplay() {
  $('.carousel').carousel('next');
  setTimeout(autoplay, 12500);
}

//Box Image

$(document).ready(function () {
  $('.materialboxed').materialbox();
});

//SideNav

$(document).ready(function () {
  $('.sidenav').sidenav();
});


//Dropdown

$(".dropdown-trigger").dropdown();

var body = document.querySelector(".body");


//Tabs
$(document).ready(function () {
  $('.tabs').tabs();
});

//Custom

function color(item) {

  item.style.transform = "scale(1)";

}

function grey(item) {
  item.style.transform = "scale(1.2)";

}


var but = document.querySelector(".button");


