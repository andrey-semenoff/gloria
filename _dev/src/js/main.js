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
  
  // owl-carousel init
  $(".apartment-carousel").owlCarousel({
  	items: 6,
    margin: 30,
  	smartSpeed: 1000,
  	autoHeight: true,
  	nav: true,
  	navText: [
  		"<span class='fa fa-chevron-left fa-2x owl-nav_arrow'></span>",
  		"<span class='fa fa-chevron-right fa-2x owl-nav_arrow'></span>"
  	],
  	responsive: {
  		992: {
        items: 6,
      },
      
      768: {
      	items: 4,
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

  //Open feedback form
  $('.button_feedback').fancybox({
    padding: 3,
    wrapCSS: 'feedback-modal',
    afterShow: function() {
      $('.feedback-modal input').first().focus();
    }
  });

  //Datepicker init
  $(".datepicker").datepicker({
    changeMonth: true,
    changeYear: true
  });

  //validate bookig-form
  $('#bookig-form').validity({
    debug: false,
    ajax: true,
    action: '/ajax/book',
    inputMsg: {
      success: {
        show: false
      },
      error: {
          position: 'static'
      }
    },
    formInvalidMsg: false,
    detectIntervention: true
  });

  $('.form__input[name="children"]').on('change', function() {
    var val = $(this).val();

    if( val === '' || val === '0' || val === 0 || Number.isNaN(val) ) {
      $('.form__label_children-ages').hide().next().children('input').focus();
    } else {
      $('.form__label_children-ages').show().children('input').focus();
    }
  });


  //validate feedback-form
  $('#feedback-form').validity({
    debug: false,
    ajax: true,
    action: '/ajax/feedback',
    inputMsg: {
      success: {
        show: false
      },
      error: {
          position: 'static'
      }
    },
    formInvalidMsg: false,
    detectIntervention: true
  });

  // Show|hide modile menu
  $(document).on('click', '.burger', function(e) {
    var $this = $(this),
        $menu = $('.header__menu');

    $menu.toggleClass('header__menu_show');
  });

  // Show|hide phones
  $(document).on('click', '.button_show-phones', function(e) {
    var $this = $(this),
        $menu = $('.header__phones-holder');

    $menu.toggleClass('header__phones-holder_show');
    $('.header__languages').removeClass('header__languages_show');
  });

  // Show|hide lang
  $(document).on('click', '.header__languages', function(e) {
    var $this = $(this);

    $this.toggleClass('header__languages_show');
    $('.header__phones-holder').removeClass('header__phones-holder_show');
  });

  // Show|hide parent menu
  $(document).on('click', '.menu-item_parent', function(e) {
    var $this = $(this);

    $this.toggleClass('menu-item_parent_show');
  });


});


