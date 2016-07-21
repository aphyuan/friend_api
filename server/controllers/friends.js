var mongoose = require('mongoose');
var friendDatabase = mongoose.model('friendDatabase');

module.exports = (function() {
	return {

		getFriends: function(req, res){
			friendDatabase.find({}, function(err, friends){
				if(err){
					console.log(err);
					console.log('getfriends function friends controller');
				} else{
					res.json(friends);
				}
			})
		},
		createFriend: function(req, res){
			friend = new friendDatabase(req.body);
			friend.save(function(err, result){
				if(err){
					console.log(err);
					console.log('error creating a new friend');
				} else {
					console.log('this is our new mongoose',result);
					res.json(result);
				}
			})
		},
		getFriend: function(req, res){
			friendDatabase.find({_id: req.params.id}, function(err, result){
				if(err){
					console.log("this is the friend you are looking for", result);
				} else {
					console.log('this is our friend',result);
					res.json(result);
				}
			})
		},
		updateFriend: function(req, res){
			friendDatabase.findOne({_id: req.params.id}, function(err, result){
				if(err){
					console.log('coudlnt find friend', err);
				} else {
					result.name = req.body.name;
					result.weight = req.body.weight;
					result.color = req.body.color;
					result.save(function(err, result){
						if(err){
							console.log('couldnt save update mongoose', err);
						} else {
							console.log('foudn mongoose ', result);
							res.json(result);
						}
					})
				}
			})
		}
		// getMongooses: function(req, res){
		// 	mongooseDb.find({}, function(err, mongooses){
		// 		if(err){
		// 			console.log(err);
		// 			console.log('getmongooses function mongooses controller');
		// 		} else {
		// 			res.json(mongooses);
		// 		}
		// 	})
		// }
	}
})();
