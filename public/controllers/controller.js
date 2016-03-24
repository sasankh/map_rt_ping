//declaring angular
var mini = angular.module('mini',['ngRoute']);   //ngRoute is required for routing by angular

//Router
mini.config(function($routeProvider, $locationProvider){
	$routeProvider
	.when('/',
	//menu route
	{
		controller:'menuController',
		templateUrl:'views/menu.html'
	})
	.when('/map/static',
	//static map route
	{
		controller:'mapStaticController',
		templateUrl:'views/staticMap.html'
	})
	.when('/map/ping',
	//ping map route
	{
		controller:'mapPingController',
		templateUrl:'views/pingMap.html'
	})
	// add other 'when' as above for more routing. Point the 'page' and the respective controller
	.otherwise({redirectTo:'/'});
});
