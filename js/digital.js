



//Parallax

$(document).ready(function () {
    $('.parallax').parallax();
});


//Carousel

//Alessi


$('.carousel.carousel-slider.alessi').carousel({
    fullWidth: true,
    indicators: true,
    dist: -50,
    shift: 0,
    duration: 10,
});

function prevAle() {
    var instance = M.Carousel.getInstance(document.querySelector(".carousel.alessi"));
    instance.next();
}

function nextAle() {
    var instance = M.Carousel.getInstance(document.querySelector(".carousel.alessi"));
    instance.prev();
}


//Mag


$('.carousel.carousel-slider.magSli').carousel({
    fullWidth: true,
    indicators: true,
    dist: -50,
    shift: 0,
    duration: 10,
});


function prevMag() {
    var instance = M.Carousel.getInstance(document.querySelector(".carousel.magSli"));
    instance.next();
}

function nextMag() {
    var instance = M.Carousel.getInstance(document.querySelector(".carousel.magSli"));
    instance.prev();
}

//Proms


$('.carousel.carousel-slider.proms').carousel({
    fullWidth: true,
    indicators: true,
    dist: -50,
    shift: 0,
    duration: 10,
});

function prevPro() {
    var instance = M.Carousel.getInstance(document.querySelector(".carousel.proms"));
    instance.next();
}

function nextPro() {
    var instance = M.Carousel.getInstance(document.querySelector(".carousel.proms"));
    instance.prev();
}

//Dotmp3

$('.carousel.carousel-slider.dotmp3').carousel({
    fullWidth: true,
    indicators: true,
    dist: -50,
    shift: 0,
    duration: 10,
});

function prevDot() {
    var instance = M.Carousel.getInstance(document.querySelector(".carousel.dotmp3"));
    instance.next();
};

function nextDot() {
    var instance = M.Carousel.getInstance(document.querySelector(".carousel.dotmp3"));
    instance.prev();
};


//Frank

$('.carousel.carousel-slider.frank').carousel({
    fullWidth: true,
    indicators: true,
    dist: -50,
    shift: 0,
    duration: 10,
});

function prevFra() {
    var instance = M.Carousel.getInstance(document.querySelector(".carousel.frank"));
    instance.next();
}

function nextFra() {
    var instance = M.Carousel.getInstance(document.querySelector(".carousel.frank"));
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


//Sticky Navbar
window.onscroll = function () { stickyNav() };

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
var tabNav = document.getElementById("tabNav");
var stickyt = tabNav.offsetTop;

function stickyNav() {
    if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky")
     
    } else {
        navbar.classList.remove("sticky");

    }
};

