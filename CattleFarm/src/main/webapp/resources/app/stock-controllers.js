var stockControllers = angular.module('stockControllers', []);

stockControllers.controller('StockListCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('http://localhost:8080/cattlefarm/stock/list').success(function(data) {
      $scope.stocks = data;
    });

    $scope.orderProp = 'name';
  }]);

stockControllers.controller('StockDetailCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.stockId = $routeParams.stockId;
  }]);