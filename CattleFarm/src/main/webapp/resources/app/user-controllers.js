var userControllers = angular.module('userControllers', []);

userControllers.controller('UserListCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('http://localhost:8080/cattlefarm/user/list').success(function(data) {
      $scope.users = data;
    });

    $scope.orderProp = 'name';
  }]);

userControllers.controller('UserDetailCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.userId = $routeParams.userId;
  }]);