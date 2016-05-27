var apiKey = require('./../.env').apiKey;

exports.getRepos = function(){
  $.get('https://api.github.com/users/daneden?access_token=' + apiKey).then(function(response){
    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.getUserName = function(){
  $.get('https://api.github.com/users/daneden?access_token=' + apiKey).then(function(response){
    console.log(response.company);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
