var gitHubApi = require('./gitHubApi.js').gitHubApi;

var apiKey = require('./../apiKey.env').apiKey;


$(document).ready(function() {
  $('#searchBtn').click(function() {
    var gitHubUser = $('#gitHubUser').val();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
      $('.showGitHubUser').text("The humidity in " + city + " is " + response.main.humidity + "%");
    }).fail(function(error) {
      $('.showGitHubUser').text(error.responseJSON.message);
    });
  });
});
