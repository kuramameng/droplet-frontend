(function($) {
	"use strict";

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
    changeProfile();
  });
  $('#user-center-btn').click(function(){
    $('#user-profile').hide();
    $('#message-center').hide();
    $('#user-center').show();
    $('#check-weather').hide();
    $('#send-message').hide();
    $('#add-friend').hide();
    changeLogin();
  });
  // $('#message-center-btn').click(function(){
  //   $('#user-profile').hide();
  //   $('#message-center').show();
  //   $('#user-center').hide();
  //   $('#check-weather').hide();
  //   $('#send-message').hide();
  //   $('#add-friend').hide();
  // });
  $(document).on("click",'#weather-btn', function(){
    $('#user-profile').hide();
    $('#message-center').hide();
    $('#user-center').hide();
    $('#send-message').hide();
    $('#add-friend').hide();
    $('#check-weather').show();
    $('#weather-info').html('');
    $('#search-weather').find('input[type=text]').val('');
  });
  $(document).on("click", '#send-message-btn', function(){
    $('#user-profile').hide();
    $('#message-center').hide();
    $('#user-center').hide();
    $('#check-weather').hide();
    $('#add-friend').hide();
    $('#send-message').show();
    $('#message-info').find('input[type=text]').val('');
  });
  $(document).on("click", '#add-friend-btn', function(){
    addFriend();
  });
  $(document).on("click", '#friend-pic-btn', function(e){
    e.preventDefault();
    $('#friend-pic').attr("src", "");
    $('#friend-pic').attr("src", $('#friend-pic-url').val());
  })
  $(document).on("click", '#add-weather-friend', function(){
    addWeatherFriend();
  });
})(jQuery);
