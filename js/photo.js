
//Parallax

$(document).ready(function () {
    $('.parallax').parallax();
});


//Carousel

//Porsche


$('.carousel.carousel-slider.porSli').carousel({
    fullWidth: true,
    indicators: true,
    dist: -50,
    shift: 0,
    duration: 100,
});

function prevPor() {
    var instance = M.Carousel.getInstance(document.querySelector(".carousel.porSli"));
    instance.next();
}

function nextPor() {
    var instance = M.Carousel.getInstance(document.querySelector(".carousel.porSli"));
    instance.prev();
}


//Lexus


$('.carousel.carousel-slider.lexSli').carousel({
    fullWidth: true,
    indicators: true,
    dist: -50,
    shift: 0,
    duration: 100,


});


function prevLex() {
    var instance = M.Carousel.getInstance(document.querySelector(".carousel.lexSli"));
    instance.next();
}

function nextLex() {
    var instance = M.Carousel.getInstance(document.querySelector(".carousel.lexSli"));
    instance.prev();
}

//IAMM


$('.carousel.carousel-slider.iamSli').carousel({
    fullWidth: true,
    indicators: true,
    dist: -50,
    shift: 0,
    duration: 100,


});

function prevIam() {
    var instance = M.Carousel.getInstance(document.querySelector(".carousel.iamSli"));
    instance.next();
}

function nextIam() {
    var instance = M.Carousel.getInstance(document.querySelector(".carousel.iamSli"));
    instance.prev();
}

//Sei

$('.carousel.carousel-slider.seiSli').carousel({
    fullWidth: true,
    indicators: true,
    dist: -100,
    shift: 0,
    duration: 100,
});

function prevSei() {
    var instance = M.Carousel.getInstance(document.querySelector(".carousel.seiSli"));
    instance.next();
}

function nextSei() {
    var instance = M.Carousel.getInstance(document.querySelector(".carousel.seiSli"));
    instance.prev();
}

//Tabs
$(document).ready(function () {
    $('.tabs').tabs();
});

//Dropdown

$(".dropdown-trigger").dropdown();

var body = document.querySelector(".body");

//Box Image

$(document).ready(function () {
    $('.materialboxed').materialbox();
});


//SideNav 
$(document).ready(function () {
    $('.sidenav').sidenav();
});
