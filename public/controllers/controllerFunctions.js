angular.module('mini');  //telling angular that the js is a part of 'mini'
/*----------------------------------------------------------------------------*/

//Declaring of controllers and linking it to its function
mini.controller('menuController',menuController);
mini.controller('mapStaticController',mapStaticController);
mini.controller('mapPingController',mapPingController);

/*-----------------------------------------------------------------------------*/

//controller function
//menu controller
function menuController($scope, $http){

	var refresh = function(){
	};

	$scope.staticMap = function(){
		location.href = "#/map/static";
	}
	$scope.pingMap = function(){
		location.href = "#/map/ping"
	}

	refresh();
}

//static map controller function
function mapStaticController($scope, $http){
	var refresh = function(){
	};

	refresh();
}

//ping map controller function
function mapPingController($scope, $http){
	$scope.location = {"lat": 27.717245, "lng": 85.323960};

	var refresh = function(){
		$http.get('/retriveLocation').then(function(response){
			$scope.location = response.data.location;
			console.log($scope.location);
		}, function(response){
			console.log(response);
		});
	};

	refresh();
}

/*----------------------------------------------------------------------------*/

mini.filter('ping',function(){
  return function(){
    return new google.maps.Marker({map: map, position: {lat: 18.432608, lng: -99.133209}});
  }
});
