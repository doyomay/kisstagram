/**
 * Created by Gerardo on 6/14/2015.
 */
angular.module('app')
	.controller('TimelineCtrl', function ($scope) {
		var Post = new Posts();
		angular.element(document).ready(function(){
			Post.addDetectionTop();
		});
		angular.element(document).bind('resize scroll',function(){
			Post.addDetectionTop();
		});
		var postsContainer = [{
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
		}, {
			usuario: {
				nombre: 'doyomay',
				avatar: 'profile.gif'
			},
			imagen: 'https://ununsplash.imgix.net/photo-1429277096327-11ee3b761c93?q=75&fm=jpg&w=1080&fit=max&s=79830900ab0bfa424f02f49d12de4e3c',
			texto: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci culpa eveniet fuga pariatur perferendis, sint veniam vero! Dolores, earum sequi? Debitis distinctio in laudantium minus necessitatibus obcaecati omnis possimus, suscipit.',
			comments: [{
				usuario: 'Gerardo',
				comment: 'Este es un commentario de prueba'
			}]
		}, {
			usuario: {
				nombre: 'doyomay',
				avatar: 'profile.gif'
			},
			imagen: 'https://unsplash.imgix.net/photo-1424746219973-8fe3bd07d8e3?q=75&fm=jpg&w=1080&fit=max&s=1540f8eba1e1efc938d0b00e0c16b86c',
			texto: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci culpa eveniet fuga pariatur perferendis, sint veniam vero! Dolores, earum sequi? Debitis distinctio in laudantium minus necessitatibus obcaecati omnis possimus, suscipit.',
			comments: [{
				usuario: 'Gerardo',
				comment: 'Este es un commentario de prueba'
			}]
		}, {
			usuario: {
				nombre: 'doyomay',
				avatar: 'profile.gif'
			},
			imagen: 'https://ununsplash.imgix.net/photo-1430126833726-4a091c572f3c?q=75&fm=jpg&w=1080&fit=max&s=e3c32f5602ca5b31e5b32fdea80f3e5d',
			texto: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci culpa eveniet fuga pariatur perferendis, sint veniam vero! Dolores, earum sequi? Debitis distinctio in laudantium minus necessitatibus obcaecati omnis possimus, suscipit.',
			comments: [{
				usuario: 'Gerardo',
				comment: 'Este es un commentario de prueba'
			}]
		}];
		$scope.posts = postsContainer;
	});
