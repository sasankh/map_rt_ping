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

	var refresh = function(){
		$http.get('/retriveLocation').then(function(response){
			$scope.pings = [];
			(function initiateLoop (x) {
				setTimeout(function () {
					setPing(response.data.coordinates[x]);
					if (--x > -1) initiateLoop(x);
				}, 1000);
			})(response.data.coordinates.length - 1);
		}, function(response){
			alert('There was an error getting the pings');
		});
	};

	var setPing = function(coordinates){
		var ping = new google.maps.Marker({
			map: window.map,
			//animation: google.maps.Animation.BOUNCE,
			position: {
				lat: coordinates.lat,
				lng: coordinates.lng
			}
		});

		setTimeout(function(){ping.setMap(null)}, 2*1000);
	};

	refresh();

	$scope.refresh = function(){
		refresh();
	};

}

/*----------------------------------------------------------------------------*/
