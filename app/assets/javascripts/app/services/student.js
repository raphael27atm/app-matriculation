(function(){
  'use strict';
  angular
    .module('app')
    .factory('Student',Student);

  Student.$inject = ['$resource','API_KEY'];

  function Student($resource, API_KEY) {

    var Student = $resource('/api/v1/students/:id' + API_KEY, {},{
      'get':  {method:'GET'},
      'query':  {method:'GET'},
      'save':   {method:'POST'},
      'update': { method: 'PUT'},
      'delete': {method:'DELETE'},
      'student_active':{method: 'GET', url: '/api/v1/student_active'+ API_KEY}
    });

    return Student;

  }

})();
