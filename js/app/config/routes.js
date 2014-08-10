bonggie.config(['$routeProvider','$httpProvider',function ($routeProvider,$httpProvider) {
	$routeProvider.when('/', {templateUrl: 'js/app/partials/views/dashboard.html'});
	$routeProvider.otherwise({ redirectTo: '/' });
}]);