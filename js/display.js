var changeLogin = function(){
  $('#login-result').html("Logged in");
  $('.panel-top').show();
  $('.responsive-menu').hide();
  $('.menu-bottom').hide();
  $('.toggle-menu').hide();
  $('.login').hide();
  $('#user-center').show();
};

var changeLogout = function(){
  $('#login-result').html("Logged out");
  $('.panel-top').hide();
  $('.responsive-menu').show();
  $('.menu-bottom').show();
  $('.toggle-menu').show();
  $('#user-center').hide();
  $('.homepage').show();
}
