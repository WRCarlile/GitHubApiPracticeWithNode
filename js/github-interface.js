var getRepos = require('./../js/gitHubApi.js').getRepos;

var apiKey = require('./../.env').apiKey;


$(document).ready(function() {
  $('#searchBtn').click(function() {
    var gitHubUser = $('#gitHubUser').val();
    getRepos();
    // $.get('https://api.github.com/users/daneden').then(function(response) {
    //   $('.showGitHubUser').text( response );
    // }).fail(function(error) {
    //   $('.showGitHubUser').text(error.responseJSON.message);
    // });
  });
});
