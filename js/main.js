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
    $("#menu-3").slideDown('slow');
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
  $('#user-profile-btn').click(function(){
    $('#user-profile').show();
    $('#user-center').hide();
    $('#message-center').hide();
    $('#check-weather').hide();
    $('#send-message').hide();
    $('#add-friend').hide();
  });
  $('#user-center-btn').click(function(){
    $('#user-profile').hide();
    $('#message-center').hide();
    $('#user-center').show();
    $('#check-weather').hide();
    $('#send-message').hide();
    $('#add-friend').hide();
  });
  $('#message-center-btn').click(function(){
    $('#user-profile').hide();
    $('#message-center').show();
    $('#user-center').hide();
    $('#check-weather').hide();
    $('#send-message').hide();
    $('#add-friend').hide();
  });
  $(document).on("click",'#weather-btn', function(){
    $('#user-profile').hide();
    $('#message-center').hide();
    $('#user-center').hide();
    $('#send-message').hide();
    $('#add-friend').hide();
    $('#check-weather').show();
  });
  $(document).on("click", '#send-message-btn', function(){
    $('#user-profile').hide();
    $('#message-center').hide();
    $('#user-center').hide();
    $('#check-weather').hide();
    $('#add-friend').hide();
    $('#send-message').show();
  });
  $(document).on("click", '#add-friend-btn', function(){
    $('#user-profile').hide();
    $('#message-center').hide();
    $('#user-center').hide();
    $('#check-weather').hide();
    $('#send-message').hide();
    $('#add-friend').show();
  })


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
