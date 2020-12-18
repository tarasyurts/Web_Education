(function(){
	'use strict';

	angular.module('myModule', [])

	.controller('myController', function($scope){
		$scope.userInput = '';
		$scope.answer = '';
		$scope.onClickAskButton = function(){

			if(!$scope.userInput){
				$scope.answer = 'Будь ласка, уведіть дані!';
				return;
			}

			let userInputSplit = $scope.userInput.split(',');
			let userInputFiltered = userInputSplit.filter(value=> value !== ' ').filter(value=> value);
			
			if(userInputFiltered.length>3)
				$scope.answer = "Це забагато!";
			else
				$scope.answer = "На здоров'я!";
			
		}
	});

})();