var apiKey = require('./../.env').apiKey;

exports.GitHubApiCall = function() {
};

exports.getRepos = function(){
  $.get('https://api.github.com/users/' + 'daneden' + '/repos' + '?access_token=' + apiKey).then(function(response){

    console.log(response[0].description);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.GitHubApiCall.prototype.getUserName = function(gitHubUserName){

  $.get('https://api.github.com/users/' + gitHubUserName + '/repos' + '?access_token=' + apiKey).then(function(response){

    for(i = 0; i < response.length; i++) {
      if (response[i].description === "") {
        $('.showGitHubUser').append('<p>' + "Repository Name: " + response[i].name + '</p>' + '<br>');
      }
      else {
        $('.showGitHubUser').append('<p>' + " Name: " + response[i].name + '</p>' +  '<p>' + ' Description: ' + response[i].description + '</p>' + "<br>");
      }
    }
    // return response.login;
  }).fail(function(error){
    $('#showGitHubUser').text(error.responseJSON.message);
  });
};
