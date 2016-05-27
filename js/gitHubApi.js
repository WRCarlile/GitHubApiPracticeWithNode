var apiKey = require('./../.env').apiKey;

exports.GitHubApiCall = function() {

}

// exports.GitHubApiCall.prototype.getRepos = function(){
//   $.get('https://api.github.com/users/daneden?access_token=' + apiKey).then(function(response){
//     console.log(response);
//   }).fail(function(error){
//     console.log(error.responseJSON.message);
//   });
// };

exports.GitHubApiCall.prototype.getUserName = function(){
  $.get('https://api.github.com/users/daneden?access_token=' + apiKey).then(function(response){
    return response.login;
  }).fail(function(error){
    $('#showGitHubUser').text(error.responseJSON.message);
  });
};
