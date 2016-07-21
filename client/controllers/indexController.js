myApp.controller('indexController', function($scope, friendFactory){
	// Here is where we are creating indexController.
	// You have to make sure that our index controller matches the name
	// that we pass in, in our router.
	// So far the only variable that I'm injecting into this controller
	// is $scope.

	console.log('I am able to load my indexController along with my index partial');

	friendFactory.getFriends(function(data){
		console.log('this is data in indexController get friends', data);
		$scope.friends = data;
		console.log($scope.friends);
	})

	$scope.createFriend = function(){
		console.log('createFriend indexController', $scope.newFriend);
		friendFactory.addFriend($scope.newFriend, function(friendArray){
			$scope.friends = friendArray;
		})
	}
})
