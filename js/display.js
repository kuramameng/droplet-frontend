var changeLogin = function(){
  $('#login-result').html("Logged in");
  $('.panel-top').show();
  $('.responsive-menu').hide();
  $('.menu-bottom').hide();
  $('.toggle-menu').hide();
  $('.login').hide();
  $('#user-center').show();
  $.ajax({
    method: "GET",
    url: "http://localhost:3000/profiles",
    dataType: "json"
  }).done(function(profile){
      $.ajax({
        method: "GET",
        url: "http://localhost:3000/friends",
        dataType: "json"
      }).done(function(friends){
        $.ajax({
          method: "GET",
          url: "http://localhost:3000/messages",
          dataType: "json"
        }).done(function(messages){
          var data = {};
          data["profile"] = profile[0];
          data["friends"] = friends;
          data["messages"] = messages;
          console.log(data);
          var userIndexTemplate = Handlebars.compile($('#user-center-index').html());
          var userHTML = userIndexTemplate(data);
          $('#user-center').html('');
          $('#user-center').append(userHTML);
        })
      })
  }).fail(function(profile){
    console.error(profile);
  });
};

var changeLogout = function(){
  $('#login-result').html("Logged out");
  $('.panel-top').hide();
  $('.responsive-menu').show();
  $('.menu-bottom').show();
  $('.toggle-menu').show();
  $('#user-center').hide();
  $('#check-weather').hide();
  $('.register').show();
  $('.homepage').hide();
};

var changeProfile = function(){
  $.ajax({
    method: "GET",
    url: "http://localhost:3000/profiles",
    dataType: "json"
  }).done(function(profile){
    var profileIndexTemplate = Handlebars.compile($('#user-profile-index').html());
    var profileHTML = profileIndexTemplate(profile[0]);
    $('#user-profile').html('');
    $('#user-profile').append(profileHTML);
  }).fail(function(profile){
    console.error(profile);
  });
};

var showWeather = function(item){
  Handlebars.registerHelper('lowerCaseAndDash', function(str) {
    return str.toLowerCase().replace(' ','-');
  });
  var weatherIndexTemplate = Handlebars.compile($('#check-weather-index').html());
  var weatherHTML = weatherIndexTemplate(item);
  $('#weather-info').html('');
  $('#weather-info').append(weatherHTML);
}
