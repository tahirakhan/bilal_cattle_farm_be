var farmControllers = angular.module('farmControllers', []);

farmControllers.controller('FarmListCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('http://localhost:8080/cattlefarm/farm/list').success(function(data) {
      $scope.farms = data;
    });

    $scope.orderProp = 'name';
  }]);

farmControllers.controller('FarmDetailCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.farmId = $routeParams.farmId;
  }]);