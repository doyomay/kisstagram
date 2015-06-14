/**
 * Created by Gerardo on 6/14/2015.
 */
angular.module('app')
	.config(function ($routeProvider, $locationProvider) {
		$locationProvider.html5Mode({
			enabled: true,
			requireBase: false
		});
		$routeProvider
			.when('/', {
				controller: 'TimelineCtrl',
				templateUrl: 'timeline.html'
			})
			.when('/upload', {
				controller: 'UploadCtrl',
				templateUrl : 'upload.html'
			});
	});
