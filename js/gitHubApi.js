var apiKey = require('./../.env').apiKey;

exports.GitHubApiCall = function() {

}

exports.getRepos = function(){
  $.get('https://api.github.com/users/daneden?access_token=' + apiKey).then(function(response){
    console.log(response.login);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.GitHubApiCall.prototype.getUserName = function(gitHubUserName){
  $.get('https://api.github.com/users/' + gitHubUserName + '?access_token=' + apiKey).then(function(response){
    console.log(response.id);
    return response.login;
  }).fail(function(error){
    $('#showGitHubUser').text(error.responseJSON.message);
  });
};
