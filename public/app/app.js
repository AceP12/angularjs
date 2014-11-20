// public/app/app.js - Les Routes de l'Appli -

var app = angular.module('monApp', ['ngRoute']);

app.config(function ($routeProvider) {

	$routeProvider.when('/', {
		templateUrl: 'views/home.html',
		controller: 'homeController'
	}) // jamais de point-virgule quand on chaîne

	.when('/about', {
		templateUrl: 'views/about.html',
		controller: 'aboutController'
		})

	.when('/todo', {
		templateUrl: 'views/todo.html',
		controller: 'todoController'
		})	

	.when('/contact', {
		templateUrl: 'views/contact.html',
		controller: 'contactController'
		})

	//route par défaut
	.otherwise({redirectTo: '/'});
	
});