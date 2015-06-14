/**
 * Created by Gerardo on 6/14/2015.
 */
angular.module('app')
	.controller('TimelineCtrl', function ($scope) {
		var posts = [{
			usuario: {
				nombre: 'doyomay',
				avatar: 'profile.gif'
			},
			imagen: 'https://ununsplash.imgix.net/photo-1422207134147-65fb81f59e38?fit=crop&fm=jpg&h=800&q=75&w=1050',
			texto: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci culpa eveniet fuga pariatur perferendis, sint veniam vero! Dolores, earum sequi? Debitis distinctio in laudantium minus necessitatibus obcaecati omnis possimus, suscipit.',
			comments: [{
				usuario: 'Gerardo',
				comment: 'Este es un commentario de prueba'
			}]
		},{
			usuario: {
				nombre: 'doyomay',
				avatar: 'profile.gif'
			},
			imagen: 'https://ununsplash.imgix.net/photo-1422207134147-65fb81f59e38?fit=crop&fm=jpg&h=800&q=75&w=1050',
			texto: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci culpa eveniet fuga pariatur perferendis, sint veniam vero! Dolores, earum sequi? Debitis distinctio in laudantium minus necessitatibus obcaecati omnis possimus, suscipit.',
			comments: [{
				usuario: 'Gerardo',
				comment: 'Este es un commentario de prueba'
			}]
		},{
			usuario: {
				nombre: 'doyomay',
				avatar: 'profile.gif'
			},
			imagen: 'https://ununsplash.imgix.net/photo-1422207134147-65fb81f59e38?fit=crop&fm=jpg&h=800&q=75&w=1050',
			texto: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci culpa eveniet fuga pariatur perferendis, sint veniam vero! Dolores, earum sequi? Debitis distinctio in laudantium minus necessitatibus obcaecati omnis possimus, suscipit.',
			comments: [{
				usuario: 'Gerardo',
				comment: 'Este es un commentario de prueba'
			}]
		},{
			usuario: {
				nombre: 'doyomay',
				avatar: 'profile.gif'
			},
			imagen: 'https://ununsplash.imgix.net/photo-1422207134147-65fb81f59e38?fit=crop&fm=jpg&h=800&q=75&w=1050',
			texto: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci culpa eveniet fuga pariatur perferendis, sint veniam vero! Dolores, earum sequi? Debitis distinctio in laudantium minus necessitatibus obcaecati omnis possimus, suscipit.',
			comments: [{
				usuario: 'Gerardo',
				comment: 'Este es un commentario de prueba'
			}]
		}];
		$scope.posts = posts;
	});
