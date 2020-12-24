(function () {
	
	'use strict';


	angular.module('myModule', [])
		.controller('buyItemController', BuyItemController)
		.controller('boughtItemController', BoughtItemController)
		.service('shopStorageService', ShopStorageService);


	BuyItemController.$inject = ['shopStorageService'];
	function BuyItemController(service) {
		var controller = this;
		controller.shopItemsToBuy = service.getShopItemsToBuy();

		controller.addItemToBought = function (shopItemIndex) { 
			service.addBoughtItem(shopItemIndex);
		}
	};



	BoughtItemController.$inject = ['shopStorageService'];
	function BoughtItemController(service) {
		var controller = this;
		controller.boughtShopItems = service.getBoughtShopItems();
	};

	class ShopItem {
		constructor(name, quantity) {
			this.name = name;
			this.quantity = quantity;
		};
	};

	function ShopStorageService() {

		var service = this;

		var shopItemsToBuy = [
			new ShopItem('Апельсин', 7),
			new ShopItem('Пачка Макарон', 6),
			new ShopItem('Слива', 31),
			new ShopItem('Хліб', 2),
			new ShopItem('Мандарин', 18)
		];

		var boughtShopItems = [];

		service.getShopItemsToBuy = function () {
			return shopItemsToBuy;
		};

		service.getBoughtShopItems = function () {
			return boughtShopItems;
		};

		service.addBoughtItem = function (shopItemIndex) {
			boughtShopItems.push(shopItemsToBuy[shopItemIndex]);
			shopItemsToBuy.splice(shopItemIndex, 1);
		};
	};

})();