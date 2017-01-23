/**
 * Created by Tahir on 1/14/2017.
 */
var app = angular.module("CattleFarm", ['ngRoute']);

    app
    .controller('mainController', function($scope) {
    $scope.projectName = "Bilal Cattle Farm";
    $scope.dashboard_lbl_animalPrices = "Animal Prices";
    $scope.dashboard_lbl_stockInHand = "Stock In Hand";
    $scope.dashboard_lbl_lastFivePurchases ="Last Five Purchases"
})

    .config(function($routeProvider, $locationProvider) {

        $routeProvider
            .when('/Book', {
                templateUrl: 'dashboard.jsp',
                controller  : 'mainController'
            }).when('/Book/farms', {
                templateUrl: 'farm.jsp',
                controller  : 'mainController'
            }).when('/Book/products', {
                templateUrl: 'products.jsp',
                controller  : 'mainController'
            }).when('/Book/tags', {
                templateUrl: 'tags.jsp',
                controller  : 'mainController'
            }).when('/Book/animals', {
                templateUrl: "animals.jsp",
                controller  : 'mainController'
            }).when('/Book/expenseType', {
                templateUrl: "expenseType.jsp",
                controller  : 'mainController'
            }).when('/Book/expense', {
                templateUrl: "expense.jsp",
                controller  : 'mainController'
            }).when('/Book/stock', {
                templateUrl: "stock.jsp",
                controller  : 'mainController'
            }).when('/Book/feedUsed', {
                templateUrl: "feedUsed.jsp",
                controller  : 'mainController'
            }).when('/Book/prices', {
                templateUrl: "prices.jsp",
                controller  : 'mainController'
            }).otherwise({ redirectTo: '/' });
            $locationProvider.html5Mode(true);
            $locationProvider.hashPrefix('!');
    })

;