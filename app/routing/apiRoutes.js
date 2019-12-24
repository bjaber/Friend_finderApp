var friends = require("../data/friends.js");





module.exports = function(app){

app.get(`/api/friends`,(req,res)=>{

res.json(friends);
});



app.post("/api/friends",function(req,res){



var closeMatch = {
    name:"",
    friendDifference:Infinity
}

var matchData = req.body;
var matchScores = matchData.scores;


var diffScore;


for (var i = 0; i < friends.length; i++){
var currentMatch = friends[i];
diffScore = 0;

console.log(currentMatch.name);


for(var k =0; k < currentMatch.scores.length; k++){

var currentMatchScore = currentMatch.scores[i];

var currentPlayerScore = matchScores[k];

diffScore += Math.abs(parseInt(currentPlayerScore)- parseInt(currentMatchScore));


}
if(diffScore <= closeMatch.friendDifference){
closeMatch.name = currentMatch.name;
closeMatch.friendDifference = diffScore;
}

}
friends.push(userData);

res.json(closeMatch);



});


};



