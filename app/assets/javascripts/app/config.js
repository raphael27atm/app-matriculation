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
        url: '/students/index',
        templateUrl: 'students/index.html',
        controller: 'StudentsController'
      })
      .state('students-new',{
        url: '/students/new',
        templateUrl: 'students/new.html',
        controller: 'StudentNewController'
      })
      .state('courses',{
        url: '/courses/index',
        templateUrl: 'courses/index.html',
        controller: 'CoursesController'
      })
      .state('courses-new',{
        url: '/courses/new',
        templateUrl: 'courses/new.html',
        controller: 'CourseNewController'
      });

    //$httpProvider.defaults.headers.common["X-CSRF-Token"] = $("meta[name=csrf-token]").attr("content");
    //$httpProvider.interceptors.push('authInterceptor');
    // default fall back route
    $urlRouterProvider.otherwise('/');


  }

})();
