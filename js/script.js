var num = 10; //number of pixels before modifying styles

$(document).bind('scroll', function () {
    if ($(window).scrollTop() > num) {
        $('.navbar').addClass('fixed--navbar');
    } else {
        $('.navbar').removeClass('fixed--navbar');
    }
});


$(document).ready(function($) {
  $('.menu-icon').on('click', function(e){
     $('#menu-slide').toggleClass('show');
  });
});

$(function () {
    
    var filterList = {
    
      init: function () {
      
        // MixItUp plugin
        // http://mixitup.io
        $('#portfoliolist').mixItUp({
          selectors: {
            target: '.portfolio',
            filter: '.filter' 
          },
          load: {
            filter: '.all'  
          }     
        });               
      
      }

    };
    
    // Run the show!
    filterList.init();
    
    
  }); 

  $(document).ready(function() {
      $('#fullpage').fullpage({
        scrollOverflow: true
      });
    });