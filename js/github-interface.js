var GitHubApiCall = require('./../js/gitHubApi.js').GitHubApiCall;
var apiKey = require('./../.env').apiKey;
var getRepos = require('./../js/gitHubApi.js').getRepos;

var displayUserName = function(gitHubUserName, apiCallBackName) {
  $('.showGitHubUser').text(gitHumbUserName + "The GitHub Users name is: " + apiCallBackName);
  console.log(gitHumbUserName);
};

$(document).ready(function() {
  var newGitHubApiObject= new GitHubApiCall();
  $('#searchBtn').submit(function() {
    event.preventDefault();
    var gitHubUserName = $('#gitHubUser').val();
    newGitHubApiObject.getUserName(gitHubUserName, displayUserName);

    console.log(displayUserName);

    // $.get('https://api.github.com/users/daneden?access_token=' + api ).then(function(response) {
    //   $('.showGitHubUser').text( response );
    // }).fail(function(error) {
    //   $('.showGitHubUser').text(error.responseJSON.message);
    // });
  });
});
