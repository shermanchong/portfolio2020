M.AutoInit();

var instance = M.Carousel.init({
  fullWidth: true,
  dist: 75,
  duration: 00,
  indicators: true,
  
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
