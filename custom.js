M.AutoInit();

$('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true,
    dist: 0,
    duration: 100
  });


var body = document.querySelector(".body");


function color(item){
  
  item.style.transform = "scale(1)";
  body.style.backgroundColor= "white";

}

function grey(item){
  item.style.transform = "scale(1.2)";
  body.style.backgroundColor= "rgb(150,166,102,50%)";
}
