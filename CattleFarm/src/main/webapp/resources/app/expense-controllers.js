var expenseControllers = angular.module('expenseControllers', []);

expenseControllers.controller('ExpenseListCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('http://localhost:8080/cattlefarm/purchase/list').success(function(data) {
      $scope.expenses = data;
    });

    $scope.orderProp = 'name';
  }]);

expenseControllers.controller('ExpenseDetailCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.expenseId = $routeParams.expenseId;
  }]);