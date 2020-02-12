M.AutoInit();

$('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true,
    dist: 0,
    shift: 10,
    
    });
    
    var instance = M.Carousel.getInstance(document.querySelector(".carousel"));
    
    function prev(){
      instance.next();
    }
    
    function next(){
      instance.prev();
    }