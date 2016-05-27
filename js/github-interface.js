var getRepos = require('./../js/gitHubApi.js').getRepos;
var getUserName = require('./../js/gitHubApi.js').getUserName;
var apiKey = require('./../.env').apiKey;


$(document).ready(function() {
  $('#searchBtn').click(function() {
    var gitHubUser = $('#gitHubUser').val();
    getRepos();
    getUserName();

    // $.get('https://api.github.com/users/daneden?access_token=' + api ).then(function(response) {
    //   $('.showGitHubUser').text( response );
    // }).fail(function(error) {
    //   $('.showGitHubUser').text(error.responseJSON.message);
    // });
  });
});
