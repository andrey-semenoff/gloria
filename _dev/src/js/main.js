'use strict';

$(function () {

  // Инициализация скрипта
  Smooth_Scroll.init();
  
  // owl-carousel init
  $(".owl-carousel[data-type='common']").owlCarousel({
  	items: 4,
  	loop: true,
  	smartSpeed: 1000,
  	autoHeight: true,
  	nav: true,
  	navText: [
  		"<span class='fa fa-chevron-left fa-2x owl-nav_arrow'></span>",
  		"<span class='fa fa-chevron-right fa-2x owl-nav_arrow'></span>"
  	],
  	responsive: {
  		992: {
        items: 4,
      },
      
      768: {
      	items: 3,
      },
      
      550: {
      	items: 2,
      },

      0: {
      	items: 1,
      }
  	}
  });


  // Remove padding, set opening and closing animations, close if clicked and disable overlay
  $(".photos-link").fancybox({
    padding: 3,
    openEffect : 'fade',
    openSpeed  : 150,
    closeEffect : 'fade',
    closeSpeed  : 150,

    nextEffect: 'fade',
    prevEffect: 'fade',

    closeClick : true,

    helpers : {
      title: {
        type: 'outside'
      },
      overlay: {
        speedOut: 500
      }
    }
  });
});


