$(function() {
	var topoffset = 50; // variable for menu height

	$('body').scrollspy({
		target: 'header .navbar',
		offset: topoffset
	});


	
	// Adds inbody class to nav when scrollspy event fires
	$('.navbar-fixed-top').on('activate.bs.scrollspy', function() {
		var hash = $(this).find('li.active a').attr('href');

		if (hash != '#featured') {
			$('header nav').addClass('inbody');
		} else {
			$('header nav').removeClass('inbody');
		}
	});



	$('.carousel').carousel({
		interval: false
	});

});




