var myApp = angular.module('rapidblogs', ["ngRoute", "angular-loading-bar"]);
old_data = {};
myApp.config(function($routeProvider) {
	$routeProvider
		.when('/customers',{
			controller: 'CustomerController',
			templateUrl: 'customers.html'
		})
		.when('/suppliers',{
			controller: 'SupplierController',
			templateUrl: 'suppliers.html'
		})
		.when('/purchases', {
			controller: 'PurchaseController',
			templateUrl: 'purchase.html'	
		})
		.when('/sales', {
			controller: 'SalesController',
			templateUrl: 'sales.html'	
		})
		.when('/payments', {
			controller: 'PaymentsController',
			templateUrl: 'payment.html'	
		})
		.when('/receipts', {
			controller: 'ReceiptController',
			templateUrl: 'receipt.html'	
		})
		.otherwise({
			redirectTo: '/customers'
		});
});

myApp.factory('dataFactory', ['$http', function($http) {
	return {
        getCustomersAsync: function(callback) {
            $http.get('https://jenitsimpleserver.herokuapp.com/customers/').success(callback);
        }
    };
}]);

myApp.controller('CustomerController', ['$scope', 'dataFactory', '$anchorScroll', '$location', '$log', function($scope, dataFactory, $anchorScroll, $location, $log) {
	$scope.customers;
	$scope.hello = "hello";

	$scope.scrollTo = function(id) {
		$log.log("called with " + id);
		$location.hash(id);
		$anchorScroll();
		$('.modalinfo').openModal();
	};

	getCustomers();
	function getCustomers() {
		console.log("hello");
		dataFactory.getCustomersAsync(function(result) {
			$scope.customers = result;
			$scope.loading = false;
		});
	}
}]);

$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
});
