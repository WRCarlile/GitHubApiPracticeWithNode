var apiKey = require('./../.env').apiKey;

exports.GitHubApiCall = function() {
};

exports.GitHubApiCall.prototype.getAvatar = function(gitHubUserName){
  $.get('https://api.github.com/users/' + 'gitHubUserName' + '?access_token=' + apiKey).then(function(response){
    $('.showGitHubUser').append('<p>'  + gitHubUserName +  '</p>');
    $('.showGitHubUser').append('<img src=' +  response.avatar_url  + '>');
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.GitHubApiCall.prototype.getUserInfo = function(gitHubUserName){

  $.get('https://api.github.com/users/' + gitHubUserName + '/repos' + '?access_token=' + apiKey).then(function(response){
    for(i = 0; i < response.length; i++) {
      if (response[i].description === "") {
        $('.showGitHubUser').append('<p>' + "Repository Name: " + response[i].name + '</p>' + '<br>');
      }
      else {
        $('.showGitHubUser').append('<p>' + " Name: " + response[i].name + '</p>' +  '<p>' + ' Description: ' + response[i].description + '</p>' + "<br>");
      }
    }
  }).fail(function(error){
    $('#showGitHubUser').text(error.responseJSON.message);
  });
};
