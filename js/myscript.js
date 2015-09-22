$(function() {
	var topoffset = 50; // variable for menu height
	var slideqty = $('#featured .item').length;

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



	//Automatically generate carousel indicators
    for (var i=0; i < slideqty; i++) {
        var insertText = '<li data-target="#featured" data-slide-to="' + i + '"></li>';
        $('#featured ol').append(insertText);
    }


	$('.carousel').carousel({
		interval: false
	});

});




