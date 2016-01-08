(function() {
  'use strict';
  angular
    .module('app')
    .controller('HomeController',HomeController);

  HomeController.$inject = ['$scope'];

  function HomeController($scope){
    $scope.things = ['Angular', 'Rails 4.1', 'UI Router', 'Together!!'];

  }

})();
