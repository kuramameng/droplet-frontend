'use strict'
var idStr;
var authAPI = {

  api_url: 'https://tranquil-bayou-4458.herokuapp.com',

  ajax: function(config, cb){
    $.ajaxSetup({
      xhrFields: {
        withCredentials: true
      }
    });
    $.ajax(config).done(function(data, textStatus, jqhxr){
      cb(null, data);
    }).fail(function(jqhxr, status, error){
      cb({jqhxr: jqhxr, statur: status, error: error});
    });
  },

  register: function(credentials, callback){
    this.ajax({
      method: 'POST',
      url: this.api_url +'/signup',
      contentType:'application/json; charset=utf-8',
      data: JSON.stringify(credentials)
    }, callback);
  },

  login: function(credentials, callback){
    this.ajax({
      method: 'POST',
      url: this.api_url +'/login',
      contentType:'application/json; charset=utf-8',
      data: JSON.stringify(credentials)
    }, callback);
  },

  logout: function(callback){
    this.ajax({
      method: 'POST',
      url: this.api_url+'/logout',
      contentType:'application/json; charset=utf-8',
      data: JSON.stringify({})
    }, callback);
  },

  getProfile: function(callback) {
    this.ajax({
      method: 'GET',
      url: this.api_url + '/profiles'
    }, callback);
  },

  createProfile: function(callback) {
    this.ajax({
      method: 'POST',
      url: this.api_url + '/profiles',
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify({})
    }, callback);
  },

  addFriend: function(credentials, callback){
    this.ajax({
      method: 'POST',
      url: this.api_url +'/friends',
      contentType:'application/json; charset=utf-8',
      data: JSON.stringify(credentials)
    }, callback);
  },
  updateFriend: function(update, callback){
    this.ajax({
      method: 'PATCH',
      url: this.api_url +'/friends',
      contentType:'application/json; charset=utf-8',
      data: JSON.stringify(update)
    }, callback);
  },

  deleteFriend: function(id, callback){
    this.ajax({
      method: 'DELETE',
      url: this.api_url +'/friends',
      contentType:'application/json; charset=utf-8',
      data: JSON.stringify(id)
    }, callback);
  },

  createMessage: function(text, callback){
    this.ajax({
      method: 'POST',
      url: this.api_url +'/messages',
      contentType:'application/json; charset=utf-8',
      data: JSON.stringify(text)
    }, callback);
  }
};

var form2object = function(form) {
  var data = {};
  $(form).find("input, textarea").each(function(index, element) {
    var type = $(this).attr('type');
    if ($(this).attr('name') && type !== 'submit' && type !== 'hidden') {
      data[$(this).attr('name')] = $(this).val();
    }
  });
  return data;
};

var callback = function(error, data) {
  if (error) {
    console.log(JSON.stringify(error));
  }
  console.log(JSON.stringify(data));
};

$(document).ready(function(){
  $('#register').on('submit', function(e) {
    e.preventDefault();
    var credentials = form2object(this);
    if(credentials.password !== credentials.password_confirmation)
      $("#register-result").html("Password does not match, try again")
    else {
      delete credentials.password_confirmation;
      var cb = function cb(error, data) {
        if (error) {
          callback(error);
          // return;
          $("#register-result").html("")
          $("#register-result").html("You're registered! Now log in.")
        }
        authAPI.createProfile({
          "first_name": "Drop",
          "last_name": "let",
          "email": "droplet@droplet.com",
          "location": "boston, ma",
          "phone": "857-445-5220",
          "image": "http://radialdirect.com.au/water-droplet-from-tank.jpg"
        }, callback);
        authAPI.addFriend({
          "first_name": "Drop",
          "last_name": "let",
          "email": "droplet@droplet.com",
          "location": "boston, ma",
          "phone": "857-445-5220",
          "image": "http://radialdirect.com.au/water-droplet-from-tank.jpg"
        }, callback);
      callback(null, data)};
      authAPI.register(credentials, cb);
    };
  });

  $('#login').on('submit', function(e) {
    e.preventDefault();
    var credentials = form2object(this);
    var loginCb = function (error, data) {
      if (error) {
        callback(error);
        $('#login-result').html("Not logged in. Try again?");
        return;
      }
      changeLogin();
    };
    authAPI.login(credentials, loginCb);
  });

  $('#logout-btn').on('click', function(e){
    e.preventDefault();
    var cb = function cb(error, data) {
      if (error) {
        callback(error);
      };
    callback(null, data);
    changeLogout();
  };
    authAPI.logout(cb);
  });

  $('#search-weather').unbind('submit').bind('submit', function(e){
    e.preventDefault();
    var form = form2object(this);
    // yahoo weather
    //"https://query.yahooapis.com/v1/public/yql?q=select item from weather.forecast where woeid in (select woeid from geo.places(1) where text='boston, ma')&format=json"
    var xhr = new XMLHttpRequest();
    xhr.open("GET","http://query.yahooapis.com/v1/public/yql?q=select item from weather.forecast where woeid in (select woeid from geo.places(1) where text='" + form.city + ", " + form.state + "')&format=json",true);
    xhr.send();

    xhr.onreadystatechange = function(){
      if(xhr.readyState == 4 && xhr.status == 200){
      var weather = JSON.parse(xhr.responseText);
      var item = weather.query.results.channel.item;
      showWeather(item);
      };
    };
  });

  $('#add-friend-form').unbind('submit').bind('submit', function(e){
    e.preventDefault();
    var form = form2object(this);
    if($('#friend-update').prop("value") === "add") {
      authAPI.addFriend(form,callback);
    }
    if($('#friend-update').prop("value") === "update"){
      var newForm = form2object(this);
      newForm["_id"] = idStr;
      console.log(newForm);
      authAPI.updateFriend(newForm, callback);
    }
    changeLogin();
  });

  $('#message-info').unbind('submit').bind('submit', function(e){
    e.preventDefault();
    var form = form2object(this);
    authAPI.createMessage(form, callback);
  });

  $(document).on('click','.show-image',function(event){
    var method = event.target.id.split('-')[0];
    idStr = event.target.id.split('-')[1];
    var idObj = {"_id": idStr};
    if (method === 'update'){
      updateFriend(idStr);
    }
    if (method === 'delete'){
      authAPI.deleteFriend(idObj, callback);
      changeLogin();
    }
    if (method === 'send'){
      sendMessage(idStr);
    }
  })
});

