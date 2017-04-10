var priceControllers = angular.module('priceControllers', []);

priceControllers.controller('PriceListCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('http://localhost:8080/cattlefarm/animalPrice/list').success(function(data) {
      $scope.prices = data;
    });

    $scope.orderProp = 'name';
  }]);

priceControllers.controller('PriceDetailCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.priceId = $routeParams.priceId;
  }]);