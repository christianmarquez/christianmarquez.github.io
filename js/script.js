var num = 10; //number of pixels before modifying styles

$(document).bind('scroll', function () {
    if ($(window).scrollTop() > num) {
        $('.navbar').addClass('fixed--navbar');
    } else {
        $('.navbar').removeClass('fixed--navbar');
    }
});


  $(document).ready(function() {
      $('#fullpage').fullpage({
        scrollOverflow: true
      });
    });
$(document).ready(function($) {
  $('.menu-icon').on('click', function(e){
     $('#menu-slide').toggleClass('show');
  });
});

jQuery(document).ready(function($) {
  $('[data-fancybox="group"]').fancybox({
    thumbs : {
      autoStart : true
    },
    buttons : [
      'zoom',
      'close'
    ]
  });
});
// $(function() {
//     var selectedClass = "";
//     $(".fil-cat").click(function(){ 
//     selectedClass = $(this).attr("data-rel"); 
//      $("#portfolio").fadeTo(100, 0.1);
//     $("#portfolio div").not("."+selectedClass).fadeOut().removeClass('scale-anm');
//     setTimeout(function() {
//       $("."+selectedClass).fadeIn().addClass('scale-anm');
//       $("#portfolio").fadeTo(300, 1);
//     }, 300); 
    
//   });
// });
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