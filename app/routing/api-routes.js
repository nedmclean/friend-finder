
var friendData  = require('../data/friends.js');
var path = require('path');
var totalDifference = 0;

module.exports = function(app){
  app.get('/api/matches', function(req, res){
    res.json(matches);
  });


  app.post('/api/matches', function(req, res){

    var userMatch = {
      name: "",
      photo: "",
      matchDifference: 200
    };
    // req.body?
    var userData = req.body;  

    var userName = userData.name;
    var usrImage = userData.photo;
    var userScore = userData.scores;
    var difference = 0;

    for(var i = 0; i < [matches].length-1; i++){
      console.log(matches[i].name);
      difference = 0;

      for(var x = 0; x < 10; x++){
        difference += Math.abs(parseInt(userScore[x]) - parseInt(matches[i].scores[x]));
        
        if (difference <= userMatch.matchDifference){

          userMatch.name = matches[i].name;
          userMatch.photo = matches[i].photo;
          userMatch.matchDifference = difference;
        }
      }
    }

    matches.push(userData);
 
    res.json(greatMatch);
  });
};