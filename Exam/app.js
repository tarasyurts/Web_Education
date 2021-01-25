(function () {
	'use strict';

	angular.module('ExamApp', [])
		.controller('CarManagementController', CarManagementController)
		.factory('CarManagementServiceFactory', CarManagementServiceFactory);

	CarManagementController.$inject = ['CarManagementServiceFactory'];
	function CarManagementController(CarManagementServiceFactory) {
		var contr = this;
		var carManagementService = CarManagementServiceFactory();
		contr.cars = carManagementService.getAllCars();


		contr.deleteByIndex = function(index){
			carManagementService.deleteByIndex(index)
		}

		contr.hideByIndex = function(index){
			carManagementService.hideByIndex(index);
		}
	};


	function CarManagementServiceFactory(){
		var factory = function(){
			return new CarManagementService();
		}
		return factory;
	}

	function CarManagementService() {
		var serv = this;
		var cars = [
			new Car('Tesla', 8),
			new Car('Aston Martin', 11),
			new Car('Lexus', 5),
			new Car('Bentley', 73),
			new Car('Ford', 21),
			new Car('Rolls-Royce', 12)
		];


		serv.deleteByIndex = function(index){
			cars.splice(index, 1);
		}

		serv.hideByIndex = function(index){
			cars[index].displayed = false;
		}

		serv.getAllCars = function(){
			return cars;
		}

	};

	class Car {
		constructor(mark, quantity) {
			this.mark = mark;
			this.quantity = quantity;
			this.displayed = true;
		};
	};

})();
