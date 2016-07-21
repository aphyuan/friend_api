myApp.controller('showController', function($scope, $routeParams, friendFactory){
  var friendId = $routeParams.id;
  friendFactory.getFriend(friendId, function(data){
    console.log('show controller,', data);
    $scope.friend = data.data;
  })
})
