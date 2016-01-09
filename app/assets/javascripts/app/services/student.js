(function(){
  'use strict';
  angular
    .module('app')
    .factory('Student',Student);

  Student.$inject = ['$resource','API_KEY'];

  function Student($resource, API_KEY) {

    var Student = $resource('/api/v1/students/:id' + API_KEY, {},{
      query: { method: 'GET' },
      save:   {method:'POST'},
      update: { method: 'PUT'}
    });

    return Student;

  }

})();
