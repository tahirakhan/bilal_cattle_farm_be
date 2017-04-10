var feedUsedControllers = angular.module('feedUsedControllers', []);

feedUsedControllers.controller('FeedUsedListCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('http://localhost:8080/cattlefarm/feedUsed/list').success(function(data) {
      $scope.feedUseds = data;
    });

    $scope.orderProp = 'name';
  }]);

feedUsedControllers.controller('FeedUsedDetailCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.feedUsedId = $routeParams.feedUsedId;
  }]);