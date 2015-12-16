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
          var profileIndexTemplate = Handlebars.compile($('#user-center-index').html());
          var profileHTML = profileIndexTemplate(data);
          $('#user-center').html('');
          $('#user-center').append(profileHTML);
        })
      })
  }).fail(function(profile){
    console.error(profile);
  });
  // $.ajax({
  //   method: "GET",
  //   url: "http://localhost:3000/friends",
  //   dataType: "json"
  // }).done(function(friends){
  //   data["friends"] = friends;
  // }).fail(function(friends){
  //   console.error(friends);
  // });
  // $.ajax({
  //   method: "GET",
  //   url: "http://localhost:3000/messages",
  //   dataType: "json"
  // }).done(function(message){
  //   data["messages"] = message;
  // }).fail(function(message){
  //   console.error(message);
  // });
  // console.log(data);

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
