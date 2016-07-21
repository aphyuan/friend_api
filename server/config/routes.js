// console.log('routes');
var friends = require('./../controllers/friends.js');
module.exports = function(app){
	// app.post('/dummies/:test', function(req, res){
	//
	// 	// I'm testing the info that I'm getting from my dummy Factory
	// 	// I console.log the body and the params just to make sure that it's
	// 	// going through
	//
	// 	console.log(req.body);
	// 	console.log(req.params.test)
	// 	// mongooseController.getMongooses(req, res);
	// })

	//get all friends
	app.get('/friends', function(req, res){
		console.log('made it to my /friends get route');
		friends.getFriends(req, res);
	});
	//show on id
  app.get('/friend/:id', function(req, res){
		console.log('made it to my /friend/:id get route');
		friends.getFriend(req, res);
	});
	//creat a new friend route
  app.post('/friends', function(req, res){
		console.log('made it to my /mongooose route');
		friends.createFriend(req, res);
	});
  //update a friend information
	app.post('/friend/:id/update', function(req, res){
	 console.log('made it to my /mongoose/:id/update post route');
	 friends.updateFriend(req, res);
	})
  // app.delete('/friends/:id', friends.delete);
}
