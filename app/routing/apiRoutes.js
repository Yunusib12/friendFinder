const friendMatch = require('../data/friends.js');

//ROUTING

module.exports = function(app) {

    app.get('/api/friends', function(req, res) {
        res.json(friendMatch);
    });

    app.post('/api/friends', function(req, res) {
        //get the new friend's scores to compare with friends in friendMatch array
        const newFriendScores = req.body.scores;
        const scoresArray = [];
        const bestMatch = 0;

        //runs through friends in list array
        for (let i = 0; i < friendMatch.length; i++) {
            const scoresDiff = 0;
            //run through scores to compare friends
            for (let j = 0; j < newFriendScores.length; j++) {
                scoresDiff += (Math.abs(parseInt(friendMatch[i].scores[j]) - parseInt(newFriendScores[j])));
            }

            //push results into scoresArray
            scoresArray.push(scoresDiff);
        }

        //after all friends are compared, find best match
        for (let i = 0; i < scoresArray.length; i++) {
            if (scoresArray[i] <= scoresArray[bestMatch]) {
                bestMatch = i;
            }
        }

        //return bestMatch data
        var bff4eva = friendMatch[bestMatch];
        res.json(bff4eva);

        //pushes new submission into the friendsList array
        friendMatch.push(req.body);
    });
};