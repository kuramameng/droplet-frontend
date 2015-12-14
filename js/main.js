(function($) {

	"use strict";

 //  	$(".main-menu a").click(function(){
	// 	var id =  $(this).attr('class');
	// 	id = id.split('-');
	// 	$('a.active').removeClass('active');
 //    	$(this).addClass('active');
	// 	$("#menu-container .content").slideUp('slow');
	// 	$("#menu-container #menu-"+id[1]).slideDown('slow');
	// 	$("#menu-container .homepage").slideUp('slow');
	// 	return false;
	// });


	// $(".main-menu a.homebutton").click(function(){
	// 	$("#menu-container .content").slideUp('slow');
	// 	$("#menu-container .homepage").slideDown('slow');
	// 	return false;
	// });

	// $(".main-menu a.aboutbutton").click(function(){
	// 	$("#menu-container .content").slideUp('slow');
	// 	$("#menu-container .about-section").slideDown('slow');
	// 	return false;
	// });

  $(".get-started").click(function(){

    $("#menu-1").slideUp('slow');
    $("#menu-container .gallery-section").slideDown('slow');
    return false;
  });
  $("#login-link").click(function(){
    $('.login').slideDown('slow');
    $('.register').slideUp('slow');
  });
  // register click handler
  $("#register-link").click(function(){
    $('.register').slideDown('slow');
    $('.login').slideUp('slow');
  });

	// $(".main-menu a.contactbutton").click(function(){
	// 	$("#menu-container .content").slideUp('slow');
	// 	$("#menu-container .contact-section").slideDown('slow');
	// 	return false;
	// });

	// $('.toggle-menu').click(function(){
 //        $('.show-menu').stop(true,true).slideToggle();
 //        return false;
 //    });

 //    $('.show-menu a').click(function() {
 //    	$('.show-menu').fadeOut('slow');
 //    });

})(jQuery);
