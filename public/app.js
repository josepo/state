angular.module('app', ['ui.router'])

.config(function($locationProvider, $stateProvider, $urlRouterProvider) {
   $locationProvider.html5Mode(true);
   $urlRouterProvider.otherwise('main');

   $stateProvider.state('main', {
      url: '/main',
      templateUrl: 'main.html',
      controller: 'main',
      data: {
         comments: {}
      }
   });

   $stateProvider.state('detail', {
      parent: 'main',
      url: '/detail/:id',
      templateUrl: 'detail.html',
      controller: 'detail'
   });
});
