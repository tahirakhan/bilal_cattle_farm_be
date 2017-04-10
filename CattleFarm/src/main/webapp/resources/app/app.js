var bilalApp = angular.module('bilalApp', [
  'ngRoute',
  'userControllers','dashboardControllers'
]);

bilalApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/dashboard', {
        templateUrl: 'resources/partials/dashboard.html',
        controller: 'DashboardCtrl'
      }).
      when('/users', {
        templateUrl: 'resources/partials/user-list.html',
        controller: 'UserListCtrl'
      }).
      when('/users/:userId', {
        templateUrl: 'resources/partials/user-detail.html',
        controller: 'UserDetailCtrl'
      }).
      when('/animals', {
        templateUrl: 'resources/partials/animal-list.html',
        controller: 'AnimalListCtrl'
      }).
      when('/animals/:animalId', {
        templateUrl: 'resources/partials/animal-detail.html',
        controller: 'AnimalDetailCtrl'
      }).

    when('/expenses', {
      templateUrl: 'resources/partials/expense-list.html',
      controller: 'ExpenseListCtrl'
    }).
    when('/expenses/:expenseId', {
      templateUrl: 'resources/partials/expense-detail.html',
      controller: 'ExpenseDetailCtrl'
    }).
    when('/expenseTypes', {
      templateUrl: 'resources/partials/expense-type-list.html',
      controller: 'ExpenseTypeListCtrl'
    }).
    when('/expenseTypes/:expenseTypeId', {
      templateUrl: 'resources/partials/expense-type-detail.html',
      controller: 'ExpenseTypeDetailCtrl'
    }).

    when('/farms', {
      templateUrl: 'resources/partials/farm-list.html',
      controller: 'FarmListCtrl'
    }).
    when('/farms/:farmId', {
      templateUrl: 'resources/partials/farm-detail.html',
      controller: 'FarmDetailCtrl'
    }).

    when('/feedUsed', {
      templateUrl: 'resources/partials/feed-used-list.html',
      controller: 'FeedUsedListCtrl'
    }).
    when('/feedUsed/:feedUsedId', {
      templateUrl: 'resources/partials/feed-used-detail.html',
      controller: 'FeedUsedDetailCtrl'
    }).
    when('/prices', {
      templateUrl: 'resources/partials/price-list.html',
      controller: 'PriceListCtrl'
    }).
    when('/prices/:priceId', {
      templateUrl: 'resources/partials/price-detail.html',
      controller: 'PriceDetailCtrl'
    }).

    otherwise({
        redirectTo: '/dashboard'
      });
  }]);