//declaring angular
var mini = angular.module('mini',['ngRoute']);   //ngRoute is required for routing by angular

//Router
mini.config(function($routeProvider, $locationProvider){
	$routeProvider
	.when('/',
	//main Page route
	{
		controller:'menuController',
		templateUrl:'views/menu.html'
	})
	.when('/map/static',
	//main Page route
	{
		controller:'mapStaticController',
		templateUrl:'views/staticMap.html'
	})
	.when('/map/dynamic',
	//main Page route
	{
		controller:'dynamicMapController',
		templateUrl:'views/dynamicMap.html'
	})
	// add other 'when' as above for more routing. Point the 'page' and the respective controller
	.otherwise({redirectTo:'/'});
});
