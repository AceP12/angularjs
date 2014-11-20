// public/app/controllers.js - Les Fonctions de l'Appli -


app.controller('homeController', function ($scope) {

});

app.controller('aboutController', function ($scope) {

});

app.controller('todoController', function ($scope) {

	//objets taches
	$scope.todos = [];

	$scope.addTodo = function () {
		$scope.todos.push({ text: $scope.todo, done:false }); //todo sans "s" car c'est celui du <ng-champ>
		$scope.todo = "";
	};

	$scope.status = function(todo){
		todo.done =!todo.done;
	}


});

app.controller('contactController', function ($scope) {

});

// Le contrôleur permet de séparer la logique de l'affichage
// $rootscope parent de tous les scopes

app.controller('monController', function ($scope, $timeout) {
	$scope.name = 'TOTO';

	$timeout(function () {
		$scope.$broadcast('broadEvent', 'Hello BroadEvent');
	});

	$scope.$on('EmitEvent', function (event, msg) {
		console.log(msg);
	});
});

app.controller('childController', function($scope) {
	$scope.$on('broadEvent', function (event, msg) {
		console.log(msg);
	});
	$scope.$emit('EmitEvent', 'Hello EmitEvent');
});

app.controller('testController', function ($scope) {

	$scope.myFonction = function() {
		alert('Yep !');
	};

	// Ici on regarde le changement d'état du model de données "surveillance"
	// Depuis la 1.3 on peut surveiller une collection de données ($watchGroup)
	$scope.$watch('surveillance == "toto"', function (newValue, oldValue) {
		if (newValue) console.log("Hello !");
		if (oldValue && !newValue) console.log("Bye ! ");
	});

	$scope.name = 'Wilfrid';
	$scope.todos = [
		{todo: "Faire les courses", done: true},
		{todo: "Je dois arriver à l'heure demain", done: false},
		{todo: "Réparation voiture", done: true}
	];
});
