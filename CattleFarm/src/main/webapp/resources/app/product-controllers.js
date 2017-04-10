var productControllers = angular.module('productControllers', []);

productControllers.controller('ProductListCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('http://localhost:8080/cattlefarm/product/list').success(function(data) {
      $scope.products = data;
    });

    $scope.orderProp = 'name';
  }]);

productControllers.controller('ProductDetailCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.productId = $routeParams.productId;
  }]);