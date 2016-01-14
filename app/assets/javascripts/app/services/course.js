(function(){
  'use strict';
  angular
    .module('app')
    .factory('Course',Course);

  Course.$inject = ['$resource','API_KEY'];

  function Course($resource, API_KEY) {

    var Course = $resource('/api/v1/courses/:id' + API_KEY, {},{
      'get':  {method:'GET'},
      'query':  {method:'GET'},
      'save':   {method:'POST'},
      'update': { method: 'PUT'},
      'delete': {method:'DELETE'},
      'course_active':{method: 'GET', url: '/api/v1/course_active'+ API_KEY}
    });

    return Course;
  }

})();
