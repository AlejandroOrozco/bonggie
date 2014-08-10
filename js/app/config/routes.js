bonggie.config(['$routeProvider','$httpProvider',function ($routeProvider,$httpProvider) {
	$routeProvider.when('/', {templateUrl: 'js/app/partials/views/dashboard.html'});
	$routeProvider.when('/users', {templateUrl: 'js/app/partials/views/users.html'});
	$routeProvider.when('/profile', {templateUrl: 'js/app/partials/views/profile.html'});
	$routeProvider.when('/widgets', {templateUrl: 'js/app/partials/views/widgets.html'});
	$routeProvider.otherwise({ redirectTo: '/' });
}]);