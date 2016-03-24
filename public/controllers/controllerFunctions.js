angular.module('mini');  //telling angular that the js is a part of 'mini'
/*----------------------------------------------------------------------------*/

//Declaring of controllers and linking it to its function
mini.controller('mainController',mainController);

/*-----------------------------------------------------------------------------*/

//controller function
//main page controller
function mainController($scope, $http){     //$scope and $http are basic requirements
	$scope.location = {"lat": 27.717245, "lng": 85.323960};
	//function to refresh
	var refresh = function(){
		$http.get('/retriveAllData').then(function(response){
			$scope.location = response.data.location;
			console.log($scope.location);
		}, function(response){
			console.log(response);
		});
	};

	refresh();  //run the refresh function at load
}

/*----------------------------------------------------------------------------*/
