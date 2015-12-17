var changeLogin = function(){
  $('#login-result').html("Logged in");
  $('.panel-top').show();
  $('.responsive-menu').hide();
  $('.menu-bottom').hide();
  $('.toggle-menu').hide();
  $('.login').hide();
  $('#add-friend').hide();
  $('#user-center').show();
  $.ajax({
    method: "GET",
    url: "https://tranquil-bayou-4458.herokuapp.com/profiles",
    dataType: "json"
  }).done(function(profile){
      $.ajax({
        method: "GET",
        url: "https://tranquil-bayou-4458.herokuapp.com/friends",
        dataType: "json"
      }).done(function(friends){
        $.ajax({
          method: "GET",
          url: "https://tranquil-bayou-4458.herokuapp.com/messages",
          dataType: "json"
        }).done(function(messages){
          var data = {};
          data["profile"] = profile[0];
          data["friends"] = friends;
          data["messages"] = messages;

          Handlebars.registerHelper('getWeather', function(location, id) {
            function get_weather(){
              var xhr = new XMLHttpRequest();
              xhr.open("GET","http://query.yahooapis.com/v1/public/yql?q=select item from weather.forecast where woeid in (select woeid from geo.places(1) where text='" + location + "')&format=json",true);
              xhr.addEventListener('load', function(){
                var data = JSON.parse(xhr.responseText);
                var currentWeather = data.query.results.channel.item.condition.text;
                $('#weather'+id).html(currentWeather);
                $('#weatherpic'+id).addClass("wi wi-" + currentWeather.toLowerCase().replace(' ','-') + " fa-2x");
              });
              xhr.send();
            }
            get_weather();
          });
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
    url: "https://tranquil-bayou-4458.herokuapp.com/profiles",
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
  var weatherIndexTemplate = Handlebars.compile($('#check-weather-index').html());
  var weatherHTML = weatherIndexTemplate(item);
  $('#weather-info').html('');
  $('#weather-info').append(weatherHTML);
};

var updateFriend = function(id){
  $('#user-profile').hide();
  $('#message-center').hide();
  $('#user-center').hide();
  $('#check-weather').hide();
  $('#send-message').hide();
  $('#add-friend').show();
  $.ajax({
    method: "GET",
    url: "https://tranquil-bayou-4458.herokuapp.com/friends/" + id,
    dataType: "json"
  }).done(function(friend){
    $('#friend-pic').attr("src", friend[0].image);
    $('#friend-pic-url').attr("value", friend[0].image);
    $('#add-friend-form input[name = first_name]').attr("value", friend[0].first_name);
    $('#add-friend-form input[name = last_name]').attr("value", friend[0].last_name);
    $('#add-friend-form input[name = location]').attr("value", friend[0].location);
    $('#add-friend-form input[name = phone]').attr("value", friend[0].phone);
    $('#add-friend-form input[name = email]').attr("value", friend[0].email);
    $('#friend-update').prop("value", "update");
  }).fail(function(friend){
    console.error(friend);
  });
};

var addFriend = function(){
  $('#user-profile').hide();
  $('#message-center').hide();
  $('#user-center').hide();
  $('#check-weather').hide();
  $('#send-message').hide();
  $('#friend-pic').attr("src", "");
  $('#friend-pic-url').attr("value", "");
  $('#add-friend-form input[name = first_name]').attr("value", "");
  $('#add-friend-form input[name = last_name]').attr("value", "");
  $('#add-friend-form input[name = location]').attr("value", "");
  $('#add-friend-form input[name = phone]').attr("value", "");
  $('#add-friend-form input[name = email]').attr("value", "");
  $('#friend-update').prop("value", "add");
  $('#add-friend').show();
};

var addWeatherFriend = function(){
  $('#user-profile').hide();
  $('#message-center').hide();
  $('#user-center').hide();
  $('#check-weather').hide();
  $('#send-message').hide();
  $('#friend-pic').attr("src", "");
  $('#friend-pic-url').attr("value", "");
  $('#add-friend-form input[name = location]').attr("value", $('#search-weather input[name = city]').val() + ', ' + $('#search-weather input[name = state]').val());
  $('#friend-update').prop("value", "add");
  $('#add-friend').show();
};

var sendMessage = function(id){
  $('#user-profile').hide();
  $('#message-center').hide();
  $('#user-center').hide();
  $('#check-weather').hide();
  $('#add-friend').hide();
  $('#send-message').show();
  $.ajax({
    method: "GET",
    url: "https://tranquil-bayou-4458.herokuapp.com/friends/" + id,
    dataType: "json"
  }).done(function(friend){
    $('#message-info').find('input[name=to]').val(friend[0].phone);
    $('#send-message-user-pic').attr("src", friend[0].image);
  }).fail(function(friend){
    console.error(friend);
  });
}
