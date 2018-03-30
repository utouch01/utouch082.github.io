// search dialog box
$('document').ready(function(){
  $('.header .search').click(function(){
    $('.search-dialog').slideDown(1000);
  });
  $('.search-dialog .delete img').click(function(){
    $('.search-dialog').slideUp(1000); 
  })
});




// nav fixed 
$("document").ready(function(){
	 $(window).scroll(function(){
	  if($(window).scrollTop()>200){
		$('.main-nav').addClass('fixed-top');  
	  }
	  else{
		$('.main-nav').removeClass('fixed-top');  
	  }
	});
	});





// main slider
$('document').ready(function(){
   $('#main-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    dots:false,
    nav:true,
    smartSpeed:1000,
    autoplay:false,
    autoplayTimeout:5000,
    mouseDrag:false,
    navText:['<i class="fas fa-arrow-left"></i>','<i class="fas fa-arrow-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
}) ;
     $('#main-carousel').on("changed.owl.carousel", function(event){
        // selecting the current active item
        var item = event.item.index-2;
        // first removing animation for all captions
        $('h1').removeClass('animated zoomInUp');
        $('.owl-item').not('.cloned').eq(item).find('h1').addClass('animated zoomInUp');
        
        $('p').removeClass('animated fadeInUpBig');
        $('.owl-item').not('.cloned').eq(item).find('p').addClass('animated fadeInUpBig');
         
        $('.slider-btn').removeClass('animated lightSpeedIn');
        $('.owl-item').not('.cloned').eq(item).find('.slider-btn').addClass('animated lightSpeedIn');
         
         $('h2').removeClass('animated zoomInUp');
        $('.owl-item').not('.cloned').eq(item).find('h2').addClass('animated zoomInUp');
         
        $('.img-btn').removeClass('animated bounceInLeft');
        $('.owl-item').not('.cloned').eq(item).find('.img-btn').addClass('animated bounceInLeft');
         
        $('.slider-btn3').removeClass('animated zoomInDown');
        $('.owl-item').not('.cloned').eq(item).find('.slider-btn3').addClass('animated zoomInDown');
         
        $('.boy').removeClass('animated slideInLeft');
        $('.owl-item').not('.cloned').eq(item).find('.boy').addClass('animated slideInLeft');
        
    })

});





$('document').ready(function(){
   $('#discover-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    dots:true,
    animateOut: 'zoomOut',
    animateIn: 'zoomInLeft',
    smartSpeed:1400,
    autoplay:false,
    autoplayTimeout:7000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
}) ;
});







/* video popup */
$(function(){
     $("#video").videoPopup({
        autoplay: 1,
        controlsColor: 'blue',
        showVideoInformations: 0,
        width: 1000,
        customOptions: {
        rel: 0,
        end: 120
         }
    });
});



//counter up
$("document").ready(function(){
  $('.counter').countUp({
      delay: 10,
      time: 4000
  });
});



// question section carousel
$('document').ready(function(){
  $('.bxslider').bxSlider({
    auto: true,
	speed:1500,
    mouseDrag:true,
  buildPager: function(slideIndex){
     
    switch(slideIndex){
	   
      case 0:
        return '<h1>1</h1>';
      case 1:
        return '<h1>2</h1>';
      case 2:
        return '<h1>3</h1>';	
      case 3:
        return '<h1>4</h1>';	
      case 4:
        return '<h1>5</h1>';	
      case 5:
        return '<h1>6</h1>';	
    }
  }
});//end main slider//  
});





// interface carousel
$('document').ready(function(){
   $('#interface-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:false,
    dots:true,
    animateOut: 'fadeOutRightBig',
    animateIn: 'fadeInLeftBig',
    smartSpeed:2000,
    autoplay:true,
    
    autoplayTimeout:7000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:1
        }
    }
}) ;
});





//customer carousel
$('document').ready(function(){
   $('#customer-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    navText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
    dots:false,
    smartSpeed:2000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
}) ;
});



// scroll top

$("document").ready(function(){
  $(".scroll-top").click(function(){
   $("html,body").animate({scrollTop:0},1000);
  });	
});


// preloader 
$(window).on('load', function() { 
  $('#status').fadeOut(); 
   $('.preloader').delay(1350).fadeOut('slow'); 
   $('body').delay(1350).css({'overflow':'visible'});
  })



//about story carousel
$('document').ready(function(){
   $('#story-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    navText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
    dots:false,
    smartSpeed:1200,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
}) ;
});



//about works carousel
$('document').ready(function(){
   $('#work-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:false,
    dots:true,
    smartSpeed:1200,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
}) ;
});


//about customer carousel
$('document').ready(function(){
   $('#customer-slider').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    navText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
    dots:false,
    smartSpeed:1200,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
}) ;
});


//products accordion
  $("#accordion").accordion({
    classes: {
      "ui-accordion-header": "ui-accordion-custom-header",
      "ui-accordion-header-active": "ui-accordion-custom-header-active",
      "ui-accordion-header-collapsed": "ui-accordion-custom-header-collapsed",
      "ui-accordion-content": "ui-accordion-custom-content",
      "ui-accordion-header-icon": "ui-accordion-custom-header-icon"
    },
    animate: 200,
    active: false,
    collapsible: true,
    heightStyle: "content",
    icons: { header: "fas fa-plus", activeHeader: "fas fa-minus" }
  });


//screen shots popup
$('document').ready(function(){
  $('.screen-shots .image span').click(function(){
    $('.screen-shots .popup').fadeIn(900);
  });
  $('.screen-shots .popup .img span').click(function(){
    $('.screen-shots .popup').fadeOut(900);
  });
});



// tabs
  $( function() {
    $( "#tabs" ).tabs({
      show: { effect: "fade",duration: 1000}
    });
  } );


// google map 
(function($){
			// declare global key
			// so we dont have to pass it every time.
			$.fn.roamiGmap.defaults.key = 'AIzaSyDlL6aaAvANHgizHhDTQMyeV5nbPbflAyo';

			// reference our variables for efficiency
			var chicagoMap = $('.roamiGmap-chicago'),
			searchChicagoMap = $('#search-chicago-gmap'),
            
			sfMap = $('.roamiGmap-sf');

			// build our maps on doc ready
			$(document).ready(function(){
				// map for chicago
				

				// san francisco map
				sfMap.roamiGmap({
					center: '23.7888984,90.4088686',
					mapOptions: {
						styles: [{
						  "elementType": "geometry",
						  "stylers": [{
						      "color": "#E7E7E7"
						  }]
						}, {
						  "elementType": "labels.icon",
						  "stylers": [{
						      "visibility": "on"
						  }]
						}, {
						  "elementType": "labels.text.fill",
						  "stylers": [{
						      "color": "#4F9B4B"
						  }]
						}, {
						  "elementType": "labels.text.stroke",
						  "stylers": [{
						      "color": "#ECF5FE"
						  }]
						}, {
						  "featureType": "administrative",
						  "elementType": "geometry",
						  "stylers": [{
						      "color": "#f59000"
						  }]
						}, {
						  "featureType": "administrative.country",
						  "elementType": "labels.text.fill",
						  "stylers": [{
						      "color": "#9e9e9e"
						  }]
						}, {
						  "featureType": "administrative.land_parcel",
						  "stylers": [{
						      "visibility": "off"
						  }]
						}, {
						  "featureType": "administrative.locality",
						  "elementType": "labels.text.fill",
						  "stylers": [{
						      "color": "#f59000"
						  }]
						}, {
						  "featureType": "poi",
						  "elementType": "labels.text.fill",
						  "stylers": [{
						      "color": "#01A23C"
						  }]
						}, {
						  "featureType": "poi.park",
						  "elementType": "geometry",
						  "stylers": [{
						      "color": "#61AEAB"
						  }]
						}, {
						  "featureType": "poi.park",
						  "elementType": "labels.text.fill",
						  "stylers": [{
						      "color": "#61AEAB"
						  }]
						}, {
						  "featureType": "poi.park",
						  "elementType": "labels.text.stroke",
						  "stylers": [{
						      "color": "#61AEAB"
						  }]
						}, {
						  "featureType": "road",
						  "elementType": "geometry.fill",
						  "stylers": [{
						      "color": "#FCFCFC"
						  }]
						}, {
						  "featureType": "road",
						  "elementType": "labels.text.fill",
						  "stylers": [{
						      "color": "#FCFCFC"
						  }]
						}, {
						  "featureType": "road.arterial",
						  "elementType": "geometry",
						  "stylers": [{
						      "color": "#FFF0AB"
						  }]
						}, {
						  "featureType": "road.highway",
						  "elementType": "geometry",
						  "stylers": [{
						      "color": "#FFF0AB"
						  }]
						}, {
						  "featureType": "road.highway.controlled_access",
						  "elementType": "geometry",
						  "stylers": [{
						      "color": "#FFF0AB"
						  }]
						}, {
						  "featureType": "road.local",
						  "elementType": "labels.text.fill",
						  "stylers": [{
						      "color": "#616161"
						  }]
						}, {
						  "featureType": "transit",
						  "elementType": "labels.text.fill",
						  "stylers": [{
						      "color": "#757575"
						  }]
						}, {
						  "featureType": "water",
						  "elementType": "geometry",
						  "stylers": [{
						      "color": "#AADAFF"
						  }]
						}, {
						  "featureType": "water",
						  "elementType": "labels.text.fill",
						  "stylers": [{
						      "color": "#3d3d3d"
						  }]
						}]
					},
				})
			});
		})(jQuery)



//course carousel
$('document').ready(function(){
   $('#course-slider').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    navText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
    dots:false,
    smartSpeed:2000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
}) ;
});



//pricing toggle
$(document).ready(function(){
    $(".js-pricing-switcher").click(function(){
        $(".pricing-plan .hide").toggle();
    });
    $(".js-pricing-switcher").click(function(){
        $(".pricing-plan .show").toggle();
    });
});



//news popup
$('document').ready(function(){
  $('.news-main-content .image .overlay ul .plus').click(function(){
    $('.news-main-content .box-popup').fadeIn(900);
  });
  $('.news-main-content .box-popup .cross').click(function(){
    $('.news-main-content .box-popup').fadeOut(900);
  });
});




//news carousel
$('document').ready(function(){
   $('#content-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:false,
    dots:true,
    smartSpeed:2000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
}) ;
});




















