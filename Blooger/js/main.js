const responsive={
	0: {
		items: 1
	},
	320: {
		items: 1
	},
	552: {
		items: 2
	},
	960: {
		items: 3
	} 
};

$(document).ready(function(){

	$nav=$('.nav');  // Select the nav element
	$toggleCollapse=$('.toggle-collapse'); // Select the element

	// Click event on toggle menu
	$toggleCollapse.click(function(){
		$nav.toggleClass('collapse'); // Add the collapse class
		$('.dropbtn').$toggleCollapse('collapse2');
	});

  // Owl-carousel for blog 
  $('.owl-carousel').owlCarousel({
  	loop: true,
  	autoplay: false,
  	autoplayTimeout: 3000,
  	dots: false,
  	nav: true,
  	navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
  	responsive: responsive
  });

  // Click to scroll top
  $('.move-up span').click(function(){
  	$('html, body').animate({
  		scrollTop: 0
  	}, '1000')
  });

  // AOS instance(obj)
  AOS.init();


});