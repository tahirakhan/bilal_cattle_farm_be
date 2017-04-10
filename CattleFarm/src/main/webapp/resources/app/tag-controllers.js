var tagControllers = angular.module('tagControllers', []);

tagControllers.controller('TagListCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('http://localhost:8080/cattlefarm/tag/list').success(function(data) {
      $scope.tags = data;
    });

    $scope.orderProp = 'name';
  }]);

tagControllers.controller('TagDetailCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.tagId = $routeParams.tagId;
  }]);