myApp.factory('friendFactory', function($http){
  var factory = {};
  var friendlist = [];
  factory.addFriend = function(data, callback){
    console.log('made it to my friend factory');
    $http.post('/friends', data).then(function(data){
      console.log('make it back from backend this is our new friend', data);
      friendlist.push(data.data);
      callback(friendlist);
    })
  }
  factory.getFriends = function(callback){
    console.log('made it to friend factory get friends');
    $http.get('/friends').then(function(friends){
      console.log('made it back from backend this all friends', friends);
      friendlist = friends.data;
      callback(friendlist);
    })
  }
  factory.getFriend = function(friendId, callback){
    $http.get('/friend/'+friendId).then(function(friend){
      console.log('made it back from backend this one friend', friend);
      callback(friend);
    })
  }
  factory.updateFriend = function(updatedFriend, callback){
    $http.post('/friend/' + updatedFriend._id + '/update', updatedFriend).then(function(data){
      console.log('made it back from backend this one friend', data.data);
      callback(data.data);
    })
  }
  return factory;
})
