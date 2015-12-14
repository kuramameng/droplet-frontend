var changeLogin = function(){
  $('#login-result').html("Logged in");
  $('.panel-top').show();
  $('.responsive-menu').slideUp('slow');
  $('.menu-bottom').slideUp('slow');
  $('.toggle-menu').slideUp('slow');
  $('.login').slideUp('slow');
  $('#user-center').slideDown('slow');
};

var changeLogout = function(){
  $('#login-result').html("Logged out");
  $('.panel-top').hide();
  $('.responsive-menu').slideDown('slow');
  $('.menu-bottom').slideDown('slow');
  $('.toggle-menu').slideDown('slow');
  $('#user-center').hide();
  $('.homepage').slideDown('slow');
}
