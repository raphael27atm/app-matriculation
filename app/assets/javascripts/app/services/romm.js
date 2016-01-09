(function(){
  'use strict';
  angular
    .module('app')
    .factory('Classroom',Classroom)
    .factory('Matriculation',Matriculation);;

  Classroom.$inject = ['$resource','API_KEY'];

  function Classroom($resource, API_KEY) {

    var Classroom = $resource('/api/v1/classrooms/:id' + API_KEY, {},{
      save:   {method:'POST'},
      query: { method: 'GET' },
      update: { method: 'PUT'},
      matriculation: { method: 'GET', url: '/api/v1/matriculation/:id'+API_KEY, isArray: true }
    });
    return Classroom;
  }

  Matriculation.$inject = ['$resource','API_KEY'];

  function Matriculation($resource, API_KEY) {

    var Matriculation = $resource('/api/v1/matriculation/:id' + API_KEY, {},{
      save:   {method:'POST'},
      query: { method: 'GET' },
      update: { method: 'PUT'}
    });
    return Matriculation;
  }

})();
