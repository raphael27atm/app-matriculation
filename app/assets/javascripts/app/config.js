(function() {
  'use strict';
  angular
    .module('app')
    .config(config);

  function config($stateProvider,$urlRouterProvider,$locationProvider,$httpProvider){
    $stateProvider
      .state('home',{
        url: '/',
        templateUrl: 'index.html',
        controller: 'HomeController'
      })
      .state('students',{
        url: 'students/index',
        templateUrl: 'students/index.html',
        controller: 'StudantsController'
      });

    //$httpProvider.defaults.headers.common["X-CSRF-Token"] = $("meta[name=csrf-token]").attr("content");
    //$httpProvider.interceptors.push('authInterceptor');
    // default fall back route
    $urlRouterProvider.otherwise('/');


  }

})();
