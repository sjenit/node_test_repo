var myApp = angular.module('rapidblogs', ["ngRoute"]);
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

myApp.controller('CustomerController', ['$scope', 'dataFactory', function($scope, dataFactory) {
	$scope.customers;

	getCustomers();
	function getCustomers() {
		$scope.loading = true;
		dataFactory.getCustomersAsync(function(result) {
			$scope.customers = result;
			$scope.loading = false;
		});
	}
}]);

