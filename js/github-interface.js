var GitHubApiCall = require('./../js/gitHubApi.js').GitHubApiCall;
var apiKey = require('./../.env').apiKey;
var getRepos = require('./../js/gitHubApi.js').getRepos;

$(document).ready(function() {
  var newGitHubApiObject= new GitHubApiCall();
  $('#searchBtn').submit(function() {
    event.preventDefault();
    var gitHubUserName = $('#gitHubUser').val();
    newGitHubApiObject.getAvatar(gitHubUserName);
    newGitHubApiObject.getUserInfo(gitHubUserName);
  });
});
