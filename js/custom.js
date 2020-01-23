M.AutoInit();

var instance = M.Carousel.init({
  fullWidth: true,
  dist: 75,
  duration: 100,
  indicators: true,
  
});


function color(item){
  item.style.filter = "grayscale(100%)";
  item.style.transform = "scale(1)";
  


}

function grey(item){
  item.style.filter = "grayscale(0%)";
  item.style.transform = "scale(1.2)";

}

function zoom(item){
 
}