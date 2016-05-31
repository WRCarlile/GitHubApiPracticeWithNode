var GitHubApiCall = require('./../js/gitHubApi.js').GitHubApiCall;
var apiKey = require('./../.env').apiKey;
var getRepos = require('./../js/gitHubApi.js').getRepos;

// var displayUserName = function(gitHubUserName, apiCallBackName) {
//   // $('.showGitHubUser').text(gitHumbUserName + "The GitHub Users name is: " + apiCallBackName);
//   $('.showGitHubUser').text(gitHubUserName);
//   console.log(gitHubUserName);
// };

$(document).ready(function() {
  var newGitHubApiObject= new GitHubApiCall();
  $('#searchBtn').submit(function() {
    event.preventDefault();
    var gitHubUserName = $('#gitHubUser').val();
    newGitHubApiObject.getAvatar(gitHubUserName);
    newGitHubApiObject.getUserInfo(gitHubUserName);
  });
});
