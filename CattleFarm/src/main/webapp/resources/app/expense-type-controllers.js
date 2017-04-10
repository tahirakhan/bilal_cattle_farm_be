var expenseTypeControllers = angular.module('expenseTypeControllers', []);

expenseTypeControllers.controller('expenseTypeListCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('http://localhost:8080/cattlefarm/purchaseType/list').success(function(data) {
      $scope.expenseTypes = data;
    });

    $scope.orderProp = 'name';
  }]);

expenseTypeControllers.controller('expenseTypeDetailCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.expenseTypeId = $routeParams.expenseTypeId;
  }]);