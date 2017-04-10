var animalControllers = angular.module('animalControllers', []);

animalControllers.controller('AnimalListCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('http://localhost:8080/cattlefarm/animal/list').success(function(data) {
      $scope.animals = data;
    });

    $scope.orderProp = 'name';
  }]);

animalControllers.controller('AnimalDetailCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.animalId = $routeParams.animalId;
  }]);